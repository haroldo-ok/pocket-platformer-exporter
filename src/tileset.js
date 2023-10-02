'use strict';

const TILESET_WIDTH_TILES = 32;

const prepareTileSetData = ({ sprites }) => {
	const tileData = Object.entries(sprites)
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
		
	return { 
		...tileData,
		imageWidth: TILESET_WIDTH_TILES * 8,
		imageHeight: Math.ceil(tileData.targetTileCount / TILESET_WIDTH_TILES) * 8
	};
};
	
	
const generateTileSetImage = async ({ sprites }) => {
	const tileSetData = prepareTileSetData({ sprites });
	
	// Convert tileset to image

	const Jimp = require('jimp');

	return new Promise((resolve, reject) => {
		// See https://stackoverflow.com/a/42635011/679240	
		const imageWidth = tileSetData.imageWidth;
		const imageHeight = tileSetData.imageHeight;
		let image = new Jimp(imageWidth, imageHeight, function (err, image) {
			if (err) throw err;

			tileSetData.tiles.forEach(({ targetIndex, frames }) => {
				frames.forEach((frame, frameNumber) => {
					const tileNumber = targetIndex + frameNumber;
					const offset = {
						x: (tileNumber % TILESET_WIDTH_TILES) * 8,
						y: Math.floor(tileNumber / TILESET_WIDTH_TILES) * 8
					};
					
					frame.forEach((row, y) => {
						row.forEach((color, x) => {
						  image.setPixelColor(color, x + offset.x, y + offset.y);
						});
					});
				});				
			});

			image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
				if (err) throw err;
				resolve(buffer);
			});
		});
	});

};

module.exports = { prepareTileSetData, generateTileSetImage };