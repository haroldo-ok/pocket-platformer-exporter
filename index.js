const fs = require('fs');
const stringify = require('json-stringify-pretty-compact');


// Adapted from: https://lage.us/Javascript-Get-String-Between-Strings.html
const stringBetweenStrings = (str, startStr, endStr) => {
    pos = str.indexOf(startStr) + startStr.length;
    return str.substring(pos, str.indexOf(endStr, pos));
}

const extractJsSnippet = (html, delimiter) => stringBetweenStrings(html, `//${delimiter}Start`, `//${delimiter}End`);

const parseJsValue = original => JSON.parse(original.trim()
	// Remove trailing ';'
	.replace(/;$/, '')
	// Parse 'unescape("foo")' into a JSON string
	.replace(/unescape\((.*)\)/, (_, str) => JSON.stringify(unescape(JSON.parse(str)))));
	
const parseSnippet = (snippet, regex) => Object.fromEntries([...snippet.matchAll(regex)]
	.map(match => [match[1], parseJsValue(match[2])]));
	
	
const exampleHtml = fs.readFileSync('example-project.html', 'utf8');

const snippet = extractJsSnippet(exampleHtml, 'initialLevelData');

const worldData = parseSnippet(snippet, /WorldDataHandler\.(\w+)\s*=\s*(.*)\s*[;\n]/gm);
	
fs.writeFileSync('generated.json', stringify(worldData, { maxLength: 160 }));
	
console.log('See "generated.json"');