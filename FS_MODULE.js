const {readFileSync, writeFileSync} = require("fs");


writeFileSync("./untitled.txt", 'ashwq', 'utf-8');
console.log(readFileSync("./untitled.txt", 'utf-8'));



