'use strict';

const FileSaver = require('file-saver');
const { convertToJson, convertToTiledZip } = require('../');

const isString = o => typeof o === 'string';
const $ = selector => isString(selector) ? document.querySelectorAll(selector) : selector;
$.on = (selector, type, listener) => $(selector).forEach(el => el.addEventListener(type, listener));

const showError = e => {
	console.error(e);
	alert(e);
};

const getFileContents = () => new Promise((resolve, reject) => {
	const file = document.getElementById('sourceFile').files[0];
	if (!file) {
		reject('Please inform the Pocket Platformer project to convert');
		return;
	}
	
	const reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	
	reader.onload = function (evt) {
		resolve(evt.target.result);
	}	
	
	reader.onerror = function (evt) {
		reject('Error reading file');
	}
});

$.on('#convertToJson', 'click', () => 
	getFileContents()
	.then(convertToJson)
	.then(json => {
		const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
		FileSaver.saveAs(blob, 'pocket-platformer.json');
	})
	.catch(showError));

$.on('#convertToTiled', 'click', () =>
	getFileContents()
	.then(htmlContent => convertToTiledZip(htmlContent, { filePrefix: 'pocket-platformer' }))
	.then(zipBuffer => {
		const blob = new Blob([zipBuffer], { type: 'application/zip' });
		FileSaver.saveAs(blob, 'pocket-platformer.tiled.zip');
	})
	.catch(showError));

