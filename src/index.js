const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');

const { parsePocketPlatformer } = require('./parse');
const { prepareTileSetData, generateTileSetImage, generateTiledTileSet } = require('./tileset');
const { generateTiledMaps } = require('./map');

	
const exampleHtml = fs.readFileSync('src/mocks/example-project.html', 'utf8');

const { world, sprites, player } = parsePocketPlatformer(exampleHtml);

fs.writeFileSync('generated.json', stringify({ world, sprites, player }, { maxLength: 160 }));
	
console.log('See "generated.json"');


// Prepare tileset for conversion
const tileSetData = prepareTileSetData({ sprites });



// Convert tileset to image

const TILESET_WIDTH_TILES = 32;
const IMAGE_NAME = 'example-project.png';
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

generateTiledTileSet({ world, sprites, player }, { filePrefix: 'example-project' })
	.then(xml => fs.writeFileSync('example-project.tsx', xml));


// Convert maps to TMX

generateTiledMaps({ world, sprites }, { filePrefix: 'example-project' })
	.forEach(({name, data}) => fs.writeFileSync(name, data));