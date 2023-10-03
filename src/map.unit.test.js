'use strict';

const fs = require('fs');
const path = require('path');

const { prepareLevelData, prepareLevelsData, generateTiledMap } = require('./map');

const JSON_SOURCE = require('./mocks/example-project.json');

test('convert the data of a single level into a convenient structure for using in other steps', () => {
	const levelData = prepareLevelData(JSON_SOURCE, JSON_SOURCE.world.levels[2], 2);
	
	expect(levelData).toBeTruthy();
	expect(levelData.levelNumber).toBe(3);
});

test('convert the data of all the levels into a convenient structure for using in other steps', () => {
	const levelsData = prepareLevelsData(JSON_SOURCE);
	
	expect(levelsData.length).toBe(4);
	expect(levelsData[2].levelNumber).toBe(3);
});

test('generate a Tiled TMX from the data for a single level', async () => {
	const map = generateTiledMap(JSON_SOURCE, JSON_SOURCE.world.levels[2], 2, { filePrefix: 'tileset' });
	
	expect(map).toEqual(await fs.promises.readFile(path.join(__dirname, 'mocks/example-project.level-3.tmx'), 'utf8'));
});
