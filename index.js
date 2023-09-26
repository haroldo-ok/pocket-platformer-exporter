const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');


// Adapted from: https://lage.us/Javascript-Get-String-Between-Strings.html
const stringBetweenStrings = (str, startStr, endStr) => {
    pos = str.indexOf(startStr) + startStr.length;
    return str.substring(pos, str.indexOf(endStr, pos));
}

const extractJsSnippet = (html, delimiter) => stringBetweenStrings(html, `//${delimiter}Start`, `//${delimiter}End`);

const parseJsValue = original => JSON.parse(original.trim()
	// Remove trailing ';'
	.replace(/;$/, '')
	// Parse 'unescape("foo")' into a JSON string
	.replace(/unescape\((.*)\)/, (_, str) => JSON.stringify(unescape(JSON.parse(str)))));
	
const parseSnippet = (snippet, regex) => Object.fromEntries([...snippet.matchAll(regex)]
	.map(match => [match[1], parseJsValue(match[2])]));
	
const parseSection = (html, delimiter, regex) => parseSnippet(extractJsSnippet(html, delimiter), regex);
	
	
const exampleHtml = fs.readFileSync('example-project.html', 'utf8');

const world = parseSection(exampleHtml, 'initialLevelData', /WorldDataHandler\.(\w+)\s*=\s*(.*)\s*[;\n]/gm);
const sprites = parseSection(exampleHtml, 'changedSprites', /SpritePixelArrays\["(.*?)"\]\s*=\s*(.*?);/g);
const player = parseSection(exampleHtml, 'changedPlayerAttributes', /player\["(.*?)"\]\s*=\s*(.*?);/g);

fs.writeFileSync('generated.json', stringify({ world, sprites, player }, { maxLength: 160 }));
	
console.log('See "generated.json"');


// Prepare tileset for conversion
const tileSetData = Object.entries(sprites)
	.map(([key, { animation, ...rest }]) => ({ 
		metaData: { key, ...rest }, 
		frames: animation.map(animation => 
			animation.sprite.map(linePixels => linePixels.map(rgb => parseInt(rgb + 'FF', 16) || 0)))
	}))
	.reduce(({ sourceTileCount, targetTileCount, tiles }, tile) => ({
		sourceTileCount: sourceTileCount + 1,
		targetTileCount: targetTileCount + tile.frames.length,
		tiles: [...tiles, { 
			...tile,
			sourceIndex: sourceTileCount,
			targetIndex: targetTileCount
		}]
	}), { sourceTileCount: 0, targetTileCount: 0, tiles: [] });



// Convert tileset to image

const Jimp = require('jimp');

const TILESET_WIDTH_TILES = 32;
const IMAGE_NAME = 'spritesheet.png';
const TILESET_NAME = 'tileset.tsx';

// See https://stackoverflow.com/a/42635011/679240
const imageWidth = TILESET_WIDTH_TILES * 8;
const imageHeight = Math.ceil(tileSetData.targetTileCount / TILESET_WIDTH_TILES) * 8;
let image = new Jimp(imageWidth, imageHeight, function (err, image) {
	if (err) throw err;

	tileSetData.tiles.forEach(({ targetIndex, frames }) => {
		frames.forEach((frame, frameNumber) => {
			const tileNumber = targetIndex + frameNumber;
			const offset = {
				x: (tileNumber % TILESET_WIDTH_TILES) * 8,
				y: Math.floor(tileNumber / TILESET_WIDTH_TILES) * 8
			};
			
			frame.forEach((row, y) => {
				row.forEach((color, x) => {
				  image.setPixelColor(color, x + offset.x, y + offset.y);
				});
			});
		});				
	});

	image.write(IMAGE_NAME, (err) => {
		if (err) throw err;
	});
});


// Convert tileset to TSX

const xmlbuilder2 = require('xmlbuilder2');

const fillProperties = (baseElement, properties) => {
	const propertiesElement = baseElement.ele('properties');
	Object.entries(properties).forEach(([name, value]) => {
		const type = 
			typeof value === 'boolean' ? 'bool' :
			typeof value === 'number' ? 'float' :
			undefined;

		propertiesElement.ele('property', { name, type, value });
	});
};

const root = xmlbuilder2.create({ version: '1.0' })
	.ele('tileset', { 
		version: 1.5, 
		tiledversion: '2021.03.23', 
		name: 'tileset', 
		tilewidth: 8, 
		tileheight: 8, 
		tilecount: tileSetData.targetTileCount, 
		columns: TILESET_WIDTH_TILES
	});
	
const imageProperties = [
	...Object.entries(world).filter(([k]) => k !== 'levels').map(([k, v]) => [`world.${k}`, v]),
	...Object.entries(player).map(([k, v]) => [`player.${k}`, v])
];
fillProperties(root, Object.fromEntries(imageProperties));

root.ele('image', {
	source: IMAGE_NAME, 
	width: imageWidth, 
	height: imageHeight
});

tileSetData.tiles.forEach(({ targetIndex, metaData, frames }) => {
	const tileElement = root.ele('tile', { id: targetIndex });

	fillProperties(tileElement, metaData);
	
	if (frames.length > 1) {
		const animationElement = tileElement.ele('animation');
		frames.forEach((frame, frameNumber) => {
			animationElement.ele('frame', {
				tileid: targetIndex + frameNumber, 
				duration: 100
			});		
		});
	}
});


// convert the XML tree to string
const xml = root.end({ prettyPrint: true });
fs.writeFileSync('tileset.tsx', xml);


// Convert maps to TMX

// Prepare tileset data
const tilesPerName = Object.fromEntries(tileSetData.tiles.map(tile => [tile.metaData.name, tile]));

// Prepare map data
const mapData = world.levels.map(({ tileData, levelObjects }, levelIndex) => ({ 
	levelNumber: levelIndex + 1,
	width: tileData[0].length,
	height: tileData.length,
	map: tileData.map(row => row.map(cell => {
		if (!cell) return 0;
		
		const cellName = cell === 1 ? 'edge' : cell;
		const tile = tilesPerName[cellName];
		return tile ? tile.targetIndex + 1 : 0;
	})),
	objects: (levelObjects || []).map(({ type, ...rest }, objectIndex) => ({
		id: objectIndex + 2,
		type,
		gid: (tilesPerName[type] || {}).targetIndex + 1,
		...rest,
	}))
}));

for (const { levelNumber, width, height, map, objects } of mapData) {
	const mapRoot = xmlbuilder2.create({ version: '1.0' })
		.ele('map', { 
			version: 1.5,
			tiledversion: '2021.03.23',
			orientation: 'orthogonal',
			renderorder: 'right-down',
			width,
			height,
			tilewidth: 8,
			tileheight: 8,
			infinite: 0,
			nextlayerid: 4,
			nextobjectid: 22
		});
		
	mapRoot.ele('tileset', { firstgid: 1, source: TILESET_NAME });		

	mapRoot
		.ele('layer', {
			id: 1,
			name: 'Map',
			width,
			height		
		})
		.ele('data', { encoding: 'csv' })
		.txt('\n' + map.map(row => row.join(',')).join(',\n') + '\n');
		
	if (objects.length) {
		const objectgroupRoot = mapRoot.ele('objectgroup', { id: 2, name: "Objects" });
		objects.forEach(({ id, type, gid, x, y, extraAttributes }) => {
			const objectRoot = objectgroupRoot.ele('object', { 
				id, type, gid, 
				x: x * 8, 
				y: (y + 1) * 8, 
				width: 8, 
				height: 8 
			});
			
			if (extraAttributes && Object.keys(extraAttributes).length) {
				fillProperties(objectRoot, extraAttributes);
			}
		});
	}

	// convert the XML tree to string
	const mapXml = mapRoot.end({ prettyPrint: true });
	fs.writeFileSync(`level${levelNumber}.tmx`, mapXml);
}
