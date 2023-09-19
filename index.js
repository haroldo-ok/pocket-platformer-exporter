var fs = require('fs');

// Adapted from: https://lage.us/Javascript-Get-String-Between-Strings.html
const stringBetweenStrings = (str, startStr, endStr) => {
    pos = str.indexOf(startStr) + startStr.length;
    return str.substring(pos, str.indexOf(endStr, pos));
}

const extractJsSnippet = (html, delimiter) => stringBetweenStrings(html, `//${delimiter}Start`, `//${delimiter}End`);

const exampleHtml = fs.readFileSync('example-project.html', 'utf8');

const snippet = extractJsSnippet(exampleHtml, 'initialLevelData');

console.log(Object.fromEntries([...snippet.matchAll(/WorldDataHandler\.(\w+)\s*=\s*(.*)\s*[;\n]/gm)]
	.map(match => [match[1], match[2]])));