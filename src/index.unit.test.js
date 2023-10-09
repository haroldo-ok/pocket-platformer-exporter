'use strict';

const { readTextResource } = require('./file');
const { trimLines } = require('./util');
const { parseToObject, convertToJson, convertToTiled, convertToTiledZip } = require('./index');

test('parse the PP file', async () => {
	const source = await readTextResource('mocks/example-project.html');
	
	const { world, sprites, player } = await parseToObject(source);
	
	expect(world).toBeTruthy();
	expect(sprites).toBeTruthy();
	expect(player).toBeTruthy();
});

test('convert the PP file as JSON', async () => {
	const source = await readTextResource('mocks/example-project.html');

	const json = await convertToJson(source);
	
	expect(trimLines(json)).toEqual(trimLines(await readTextResource('mocks/example-project.json')));
});

test('convert the PP file into an array representing the generated Tiled files', async () => {
	const source = await readTextResource('mocks/example-project.html');

	const files = await convertToTiled(source, { filePrefix: 'example-project' });
	
	expect(Array.isArray(files)).toBe(true);
	expect(files.map(o => o.name)).toMatchObject([
		'example-project.png',
		'example-project.tsx',
		'example-project.level-1.tmx', 
		'example-project.level-2.tmx', 
		'example-project.level-3.tmx', 
		'example-project.level-4.tmx'
	]);
});

test('convert the PP file into a Buffer representing a ZIP with the generated Tiled files', async () => {
	const source = await readTextResource('mocks/example-project.html');

	const zipBuffer = await convertToTiledZip(source, { filePrefix: 'example-project' });
	
	expect(Buffer.isBuffer(zipBuffer)).toBe(true);
});