const file = require('fs');

file.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log(data);
    file.writeFile('./writeFile.txt', data + 'Write File Text', (err) => {
        console.log('Your file is written');
    })
}
);
console.log("Will read file");