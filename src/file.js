'use strict';

const fs = require('fs');
const path = require('path');

const readBinary = async (filePath) => fs.promises.readFile(filePath);
const readBinaryResource = async (suffix) => readBinary(path.join(__dirname, suffix));
const writeBinary = async (filePath, data) => fs.promises.writeFile(filePath, data);

const readText = async (filePath) => fs.promises.readFile(filePath, 'utf8');
const readTextResource = async (suffix) => readText(path.join(__dirname, suffix));
const writeText = async (filePath, data) => fs.promises.writeFile(filePath, data, 'utf8');
	
module.exports = { 
	readBinary, readBinaryResource, writeBinary,
	readText, readTextResource, writeText
};