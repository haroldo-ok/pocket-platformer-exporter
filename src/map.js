'use strict';

const { prepareTileSetData } = require('./tileset');


const prepareLevelData = ({ sprites }, { tileData, levelObjects }, levelIndex) => {
	const tileSetData = prepareTileSetData({ sprites });
	const tilesPerName = Object.fromEntries(tileSetData.tiles.map(tile => [tile.metaData.name, tile]));
	return { 
		levelNumber: levelIndex + 1,
		width: tileData[0].length,
		height: tileData.length,
		map: tileData.map(row => row.map(cell => {
			if (!cell) return 0;
			
			const cellName = cell === 1 ? 'edge' : cell;
			const tile = tilesPerName[cellName];
			return tile ? tile.targetIndex + 1 : 0;
		})),
		objects: (levelObjects || []).map(({ type, ...rest }, objectIndex) => ({
			id: objectIndex + 2,
			type,
			gid: (tilesPerName[type] || {}).targetIndex + 1,
			...rest,
		}))
	};
};

const prepareLevelsData = ({ sprites, world }) => world.levels.map(
	(level, levelIndex) => prepareLevelData({ sprites }, level, levelIndex));
	
	
const generateTiledMap = (project, levelData, { filePrefix }) => {
	const xmlbuilder2 = require('xmlbuilder2');

	const fillProperties = (baseElement, properties) => {
		const propertiesElement = baseElement.ele('properties');
		Object.entries(properties).forEach(([name, value]) => {
			const type = 
				typeof value === 'boolean' ? 'bool' :
				typeof value === 'number' ? 'float' :
				undefined;

			propertiesElement.ele('property', { name, type, value });
		});
	};
	
	// Prepare tileset data
	const tileSetData = prepareTileSetData(project);
	const tilesPerName = Object.fromEntries(tileSetData.tiles.map(tile => [tile.metaData.name, tile]));

	// Prepare map data
	const { levelNumber, width, height, map, objects } = levelData;
	
	// Generate the XML

	const mapRoot = xmlbuilder2.create({ version: '1.0' })
		.ele('map', { 
			version: 1.5,
			tiledversion: '2021.03.23',
			orientation: 'orthogonal',
			renderorder: 'right-down',
			width,
			height,
			tilewidth: 8,
			tileheight: 8,
			infinite: 0,
			nextlayerid: 4,
			nextobjectid: 22
		});
		
	mapRoot.ele('tileset', { firstgid: 1, source: `${filePrefix}.tsx` });		

	mapRoot
		.ele('layer', {
			id: 1,
			name: 'Map',
			width,
			height		
		})
		.ele('data', { encoding: 'csv' })
		.txt('\n' + map.map(row => row.join(',')).join(',\n') + '\n');
		
	if (objects.length) {
		const objectgroupRoot = mapRoot.ele('objectgroup', { id: 2, name: "Objects" });
		objects.forEach(({ id, type, gid, x, y, extraAttributes }) => {
			const objectRoot = objectgroupRoot.ele('object', { 
				id, type, gid, 
				x: x * 8, 
				y: (y + 1) * 8, 
				width: 8, 
				height: 8 
			});
			
			if (extraAttributes && Object.keys(extraAttributes).length) {
				fillProperties(objectRoot, extraAttributes);
			}
		});
	}

	// convert the XML tree to string
	const mapXml = mapRoot.end({ prettyPrint: true });
	return mapXml;
};

const generateTiledMaps = (project, options) => {
	const levelsData = prepareLevelsData(project);
	return levelsData.map(levelData => {
		const data = generateTiledMap(project, levelData, options);
		return {
			name: `${options.filePrefix}.level-${levelData.levelNumber}.tmx`,
			data,
			isBinary: false
		};
	});
};


module.exports = { prepareLevelData, prepareLevelsData, generateTiledMap, generateTiledMaps };