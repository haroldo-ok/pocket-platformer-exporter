'use strict';

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

$.on('#convertToJson', 'click', () => getFileContents().then(htmlContent => console.log('HTML to convert', htmlContent)).catch(showError));
$.on('#convertToTiled', 'click', () => alert('Convert Tiled!'));

