'use strict';

const { readBinaryResource, readTextResource } = require('./file');
const { trimLines } = require('./util');
const { prepareTileSetData, generateTileSetImage, generateTiledTileSet } = require('./tileset');

const JSON_SOURCE = require('./mocks/example-project.json');

test('convert the sprite data into a convenient structure for using in other steps', () => {
	const tileSetData = prepareTileSetData(JSON_SOURCE);
	
	expect(tileSetData).toBeTruthy();
});

test('generate a PNG image from the sprite data', async () => {
	const imageBuffer = await generateTileSetImage(JSON_SOURCE);
	
	expect(Buffer.isBuffer(imageBuffer)).toBeTruthy();
	expect(imageBuffer).toEqual(await readBinaryResource('mocks/example-project.png'));
});

test('generate a Tiled TSX tileset from the sprite data', async () => {
	const tileSet = await generateTiledTileSet(JSON_SOURCE, { filePrefix: 'example-project' });
	
	expect(trimLines(tileSet)).toEqual(trimLines(await readTextResource('mocks/example-project.tsx')));
});