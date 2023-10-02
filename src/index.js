const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');

const { parsePocketPlatformer } = require('./parse');
const { prepareTileSetData, generateTileSetImage } = require('./tileset');

	
const exampleHtml = fs.readFileSync('src/mocks/example-project.html', 'utf8');

const { world, sprites, player } = parsePocketPlatformer(exampleHtml);

fs.writeFileSync('generated.json', stringify({ world, sprites, player }, { maxLength: 160 }));
	
console.log('See "generated.json"');


// Prepare tileset for conversion
const tileSetData = prepareTileSetData({ sprites });



// Convert tileset to image

const TILESET_WIDTH_TILES = 32;
const IMAGE_NAME = 'spritesheet.png';
const TILESET_NAME = 'tileset.tsx';

generateTileSetImage({ sprites }).then(buffer => fs.writeFileSync(IMAGE_NAME, buffer));


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
	width: tileSetData.imageWidth, 
	height: tileSetData.imageHeight
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
