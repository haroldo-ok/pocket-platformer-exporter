'use strict';

const prepareTileSetData = ({ sprites }) => Object.entries(sprites)
	.map(([key, { animation, ...rest }]) => ({ 
		metaData: { key, ...rest }, 
		frames: animation.map(animation => 
			animation.sprite.map(linePixels => linePixels.map(rgb => parseInt(rgb + 'FF', 16) || 0)))
	}))
	.reduce(({ sourceTileCount, targetTileCount, tiles }, tile) => ({
		sourceTileCount: sourceTileCount + 1,
		targetTileCount: targetTileCount + tile.frames.length,
		tiles: [...tiles, { 
			...tile,
			sourceIndex: sourceTileCount,
			targetIndex: targetTileCount
		}]
	}), { sourceTileCount: 0, targetTileCount: 0, tiles: [] });

module.exports = { prepareTileSetData };