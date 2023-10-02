'use strict';

const fs = require('fs');
const path = require('path');

const { prepareTileSetData, generateTileSetImage } = require('./tileset');

const JSON_SOURCE = require('./mocks/example-project.json');

test('convert the sprite data into a convenient structure for using in other steps', () => {
	const tileSetData = prepareTileSetData(JSON_SOURCE);
	
	expect(tileSetData).toBeTruthy();
});

test('generate a PNG image from the sprite data', async () => {
	const imageBuffer = await generateTileSetImage(JSON_SOURCE);
	
	expect(Buffer.isBuffer(imageBuffer)).toBeTruthy();
	expect(imageBuffer).toEqual(await fs.promises.readFile(path.join(__dirname, 'mocks/example-project.png')));
});