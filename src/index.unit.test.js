'use strict';

const { readTextResource } = require('./file');
const { parseToObject, convertToJson } = require('./index');

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
	
	expect(json).toEqual(await readTextResource('mocks/example-project.json'));
});