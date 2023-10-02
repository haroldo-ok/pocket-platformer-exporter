'use strict';

const fs = require('fs');
const path = require('path');

const { prepareTileSetData } = require('./tileset');

const JSON_SOURCE = require('./mocks/example-project.json');

test('convert the sprite data into a convenient structure for using in other steps', () => {
	const tileSetData = prepareTileSetData(JSON_SOURCE);
	
	expect(tileSetData).toBeTruthy();
});