'use strict';

const { readTextResource } = require('./file');
const { prepareLevelData, prepareLevelsData, generateTiledMap, generateTiledMaps } = require('./map');

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
	const levelData = prepareLevelData(JSON_SOURCE, JSON_SOURCE.world.levels[2], 2);
	const map = generateTiledMap(JSON_SOURCE, levelData, { filePrefix: 'example-project' });
	
	expect(map).toEqual(await readTextResource('mocks/example-project.level-3.tmx'));
});

test('generate multiple Tiled TMX from the data for all the levels', async () => {
	const maps = generateTiledMaps(JSON_SOURCE, { filePrefix: 'example-project' });
	
	expect(maps.length).toBe(4);
	expect(maps[2].name).toEqual('example-project.level-3.tmx');
	expect(maps[2].data).toEqual(await readTextResource('mocks/example-project.level-3.tmx'));
});
