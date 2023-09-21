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
	//.slice(0, 4)
	.map(([key, { animation, ...rest }]) => ({ 
		key, 
		...rest, 
		frames: animation.map(animation => 
			animation.sprite.map(linePixels => linePixels.map(rgb => parseInt(rgb + 'FF', 16))))
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
console.log(tileSetData);



// Convert tileset

const Jimp = require('jimp');

const TILESET_WIDTH_TILES = 32;

const imageDataPerTiles = Object.values(sprites)
	.map(sprite => sprite.animation.map(animation => 
		animation.sprite.map(linePixels => linePixels.map(rgb => parseInt(rgb + 'FF', 16)))))
	.flat();

// See https://stackoverflow.com/a/42635011/679240
let image = new Jimp(TILESET_WIDTH_TILES * 8, Math.ceil(imageDataPerTiles.length / TILESET_WIDTH_TILES) * 8, function (err, image) {
	if (err) throw err;

	imageDataPerTiles.forEach((tile, tileNumber) => {
		const offset = {
			x: (tileNumber % TILESET_WIDTH_TILES) * 8,
			y: Math.floor(tileNumber / TILESET_WIDTH_TILES) * 8
		};
		
		tile.forEach((row, y) => {
			row.forEach((color, x) => {
			  image.setPixelColor(color, x + offset.x, y + offset.y);
			});
		});
	});

	image.write('spritesheet.png', (err) => {
		if (err) throw err;
	});
});