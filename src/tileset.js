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
	const Jimp = require('jimp');

	const tileSetData = prepareTileSetData({ sprites });
	
	// Convert tileset to image

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

const generateTiledTileSet = async ({ world, sprites, player }, { filePrefix }) => {
	const xmlbuilder2 = require('xmlbuilder2');
	
	const tileSetData = prepareTileSetData({ sprites });

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

	const root = xmlbuilder2.create({ version: '1.0' })
		.ele('tileset', { 
			version: 1.5, 
			tiledversion: '2021.03.23', 
			name: 'tileset', 
			tilewidth: 8, 
			tileheight: 8, 
			tilecount: tileSetData.targetTileCount, 
			columns: TILESET_WIDTH_TILES
		});
		
	const imageProperties = [
		...Object.entries(world).filter(([k]) => k !== 'levels').map(([k, v]) => [`world.${k}`, v]),
		...Object.entries(player).map(([k, v]) => [`player.${k}`, v])
	];
	fillProperties(root, Object.fromEntries(imageProperties));

	root.ele('image', {
		source: `${filePrefix}.png`, 
		width: tileSetData.imageWidth, 
		height: tileSetData.imageHeight
	});

	tileSetData.tiles.forEach(({ targetIndex, metaData, frames }) => {
		const tileElement = root.ele('tile', { id: targetIndex });

		fillProperties(tileElement, metaData);
		
		if (frames.length > 1) {
			const animationElement = tileElement.ele('animation');
			frames.forEach((frame, frameNumber) => {
				animationElement.ele('frame', {
					tileid: targetIndex + frameNumber, 
					duration: 100
				});		
			});
		}
	});


	// convert the XML tree to string
	const xml = root.end({ prettyPrint: true });
	
	return xml;
}

module.exports = { prepareTileSetData, generateTileSetImage, generateTiledTileSet };