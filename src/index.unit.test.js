'use strict';

const { readTextResource } = require('./file');
const { parsePocketPlatformer } = require('./index');

test('parse the PP file', async () => {
	const source = await readTextResource('mocks/example-project.html');
	
	const { world, sprites, player } = parsePocketPlatformer(source);
	
	expect(world).toBeTruthy();
	expect(sprites).toBeTruthy();
	expect(player).toBeTruthy();
});