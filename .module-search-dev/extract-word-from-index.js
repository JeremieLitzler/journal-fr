const fs = require("fs");
const data = require("./searchIndexFull.js");

const keys = Object.keys(data.pageData);
const words = Object.entries(data.pageData).map((obj) => obj[1].word);
// console.table(keys);
//Thanks https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js
fs.writeFileSync("./keys-of-index.json", JSON.stringify(words, null, 2));
