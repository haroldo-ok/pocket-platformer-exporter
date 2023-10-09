'use strict';

const AdmZip = require('adm-zip');

const compressFilesToZip = async (fileArray) => {
	const zip = new AdmZip();
	
	for (const {name, data, isBinary } of fileArray) {
		const buffer = isBinary ? data : Buffer.from(data, "utf8");
		zip.addFile(name, buffer);
	}
	
	return zip.toBuffer();
};

module.exports = { compressFilesToZip };