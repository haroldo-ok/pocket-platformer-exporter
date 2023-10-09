'use strict';

const { readBinaryResource, readTextResource } = require('./file');
const { compressFilesToZip } = require('./zip');

test('zips multiple files into a buffer containing the contents of a ZIP', async () => {
	const inputFiles = [
		{name: 'example-project.png', data: await readBinaryResource('mocks/example-project.png'), isBinary: true },
		{name: 'example-project.tsx', data: await readBinaryResource('mocks/example-project.tsx'), isBinary: false }
	];
	
	const zipBuffer = await compressFilesToZip(inputFiles);
	
	expect(Buffer.isBuffer(zipBuffer)).toBe(true);
});

