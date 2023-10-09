'use strict';

const trimLines = text => text.split('\n').map(s => s.trim()).join('\n');

module.exports = { trimLines };