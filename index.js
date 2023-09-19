var fs = require('fs');

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
	
	
const exampleHtml = fs.readFileSync('example-project.html', 'utf8');

const snippet = extractJsSnippet(exampleHtml, 'initialLevelData');

const worldData = Object.fromEntries([...snippet.matchAll(/WorldDataHandler\.(\w+)\s*=\s*(.*)\s*[;\n]/gm)]
	.map(match => [match[1], parseJsValue(match[2])]));
	
fs.writeFileSync('generated.json', JSON.stringify(worldData, null, '\t'));
	
console.log('See "generated.json"');