const fs = require('fs');
const data = require( "./onePage.js");
const SearchIndexBuilder = require("./SearchIndexBuilder.js");

const searchIndex = SearchIndexBuilder.BuildIndex(data.pageData);
console.log(JSON.stringify(searchIndex, null, 2));
//Thanks https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js
fs.writeFileSync('./.module-search-dev/.results/new-index.json', JSON.stringify(searchIndex, null, 2));