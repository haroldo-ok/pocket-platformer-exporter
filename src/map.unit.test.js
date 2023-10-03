'use strict';

const fs = require('fs');
const path = require('path');

const { prepareLevelData } = require('./map');

const JSON_SOURCE = require('./mocks/example-project.json');

test('convert the level data into a convenient structure for using in other steps', () => {
	const levelData = prepareLevelData(JSON_SOURCE, JSON_SOURCE.world.levels[2]);
	
	expect(levelData).toBeTruthy();
});
