'use strict';

const fs = require('fs');
const path = require('path');

const { parsePocketPlatformer } = require('./parse');

test('parse the PP file', () => {
	const source = fs.readFileSync(path.join(__dirname, 'mocks/example-project.html'), 'utf8');
	
	const { world, sprites, player } = parsePocketPlatformer(source);
	
	expect(world).toBeTruthy();
	expect(sprites).toBeTruthy();
	expect(player).toBeTruthy();
});