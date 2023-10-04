const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');

const { readText, writeText } = require('./file');
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

const saveToJson = async (htmlPath, jsonPath) => {
	const html = await readText(htmlPath);
	const json = await convertToJson(html);
	await writeText(jsonPath, json);
};

const convertToTiled = async (htmlContent, options) => {
	const project = await parseToObject(htmlContent);
	const image = await generateTileSetImage(project);
	const tileSet = await generateTiledTileSet(project, options);
	const maps = await generateTiledMaps(project, options);
	return [
		{ name: `${options.filePrefix}.png`, data: image, isBinary: true },
		{ name: `${options.filePrefix}.tsx`, data: tileSet, isBinary: false },
		...maps
	];
};

module.exports = { parseToObject, convertToJson, saveToJson, convertToTiled };