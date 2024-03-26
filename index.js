const fs = require('fs');
const textIn = fs.readFileSync('./file.txt', 'utf-8');
console.log(textIn);

const textOut = `${textIn} written in ${Date.now()}`;
fs.writeFileSync('./file.txt', textOut);
const textInR = fs.readFileSync('./file.txt', 'utf-8');
console.log(textInR);