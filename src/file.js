'use strict';

const fs = require('fs');
const path = require('path');

const readBinaryResource = async (suffix) =>
	fs.promises.readFile(path.join(__dirname, suffix));

const readTextResource = async (suffix) =>
	fs.promises.readFile(path.join(__dirname, suffix), 'utf8');
	
module.exports = { readBinaryResource, readTextResource };