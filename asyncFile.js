const file = require('fs');

file.readFile('./file.txt', 'utf-8', (err, data) => console.log(data));
console.log("Will read file");