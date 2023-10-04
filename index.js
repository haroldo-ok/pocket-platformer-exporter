#!/usr/bin/env node

'use strict';

const fs = require('fs');

const { 
	parseToObject, convertToJson, saveToJson, 
	convertToTiled
} = require('./src');

/* if called directly from command line or from a shell script */
if (require.main === module) {
	const yargs = require('yargs');

	const commandLine = yargs.scriptName('pocket-platformer-exporter')
		.usage('$0 <cmd> [args]')
		.command('json <src> <dest>', 'Converts a Pocket Platformer project into a JSON file.', (yargs) => {
			yargs
				.positional('src', {
					type: 'string',
					describe: 'The source video, the one that will be converted'
				})
				.positional('dest', {
					type: 'string',
					describe: 'The name of the JSON file that will be generated.'
				})
				.check((argv, options) => {
					if (!fs.existsSync(argv.src)) {
						return `The provided Pocket Platformer file does not exist: ${argv.src}`;
					}
					
					return true;
				});
		})
		.command('tiled <src> <dest>', 'Converts a Pocket Platformer project into a Tiled project.', (yargs) => {
			yargs
				.positional('src', {
					type: 'string',
					describe: 'The source video, the one that will be converted'
				})
				.positional('dest', {
					type: 'string',
					describe: 'The name of either the directory where the Tiled project will be generated.'
				})
				.check((argv, options) => {
					if (!fs.existsSync(argv.src)) {
						return `The provided Pocket Platformer file does not exist: ${argv.src}`;
					}
					
					return true;
				});
		})
		.demandCommand(1, 'You need to inform at least one command before moving on')
		.strict()
		.help()
		.argv;		
		
	if (commandLine._.includes('json')) {
		saveToJson(commandLine.src, commandLine.dest);
	}
	if (commandLine._.includes('tiled')) {
		// TODO
	}
}

module.exports = { 
	parseToObject, convertToJson, saveToJson, 
	convertToTiled
};