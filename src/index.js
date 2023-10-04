const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');

const { parsePocketPlatformer } = require('./parse');
const { generateTileSetImage, generateTiledTileSet } = require('./tileset');
const { generateTiledMaps } = require('./map');

const removeWhenDone = () => {	
	const exampleHtml = fs.readFileSync('src/mocks/example-project.html', 'utf8');

	const { world, sprites, player } = parsePocketPlatformer(exampleHtml);

	fs.writeFileSync('generated.json', stringify({ world, sprites, player }, { maxLength: 160 }));
		
	console.log('See "generated.json"');


	// Convert tileset to image

	generateTileSetImage({ sprites }).then(buffer => fs.writeFileSync('example-project.png', buffer));


	// Convert tileset to TSX

	generateTiledTileSet({ world, sprites, player }, { filePrefix: 'example-project' })
		.then(xml => fs.writeFileSync('example-project.tsx', xml));


	// Convert maps to TMX

	generateTiledMaps({ world, sprites }, { filePrefix: 'example-project' })
		.forEach(({name, data}) => fs.writeFileSync(name, data));
}

const parseToObject = async (htmlContent) => parsePocketPlatformer(htmlContent);
const convertToJson = async (htmlContent) => stringify(await parseToObject(htmlContent), { maxLength: 160 }); 

module.exports = { parseToObject, convertToJson };