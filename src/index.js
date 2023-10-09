const fs = require('fs');
const path = require('path');
const stringify = require('json-stringify-pretty-compact');

const { readText, writeText, writeBinary } = require('./file');
const { parsePocketPlatformer } = require('./parse');
const { generateTileSetImage, generateTiledTileSet } = require('./tileset');
const { generateTiledMaps } = require('./map');
const { compressFilesToZip } = require('./zip');


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

const saveToTiled = async (htmlPath, targetDir, options = {}) => {
	const cleanOptions = {
		...options,
		filePrefix: options.filePrefix || path.parse(htmlPath).name
	};
	
	const html = await readText(htmlPath);
	const files = await convertToTiled(html, cleanOptions);
	
	for (const { name, data, isBinary } of files) {
		const fullName = path.join(targetDir, name);
		if (isBinary) {
			await writeBinary(fullName, data);
		} else {
			await writeText(fullName, data);
		}
	}
};


const convertToTiledZip = async (htmlContent, options) =>  {
	const files = await convertToTiled(htmlContent, options);
	return await compressFilesToZip(files);
};


module.exports = { 
	parseToObject, convertToJson, saveToJson, 
	convertToTiled, saveToTiled,
	convertToTiledZip
};