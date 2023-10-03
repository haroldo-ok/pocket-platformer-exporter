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

module.exports = { prepareLevelData, prepareLevelsData };