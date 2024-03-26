const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

//create the server

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/overView') {
        res.end('This is overview');
    }
    else if (pathName === '/product') {
        res.end('This is the product');
    } else if (pathName === '/api') {
        fs.readFile('./dummyData.json', 'utf-8', (err, data) => {
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(data);

        })
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'

        });
        res.end('Page not found');
    }

})

//start the server

server.listen(8000, 'localhost', () => {
    console.log('Listen on port no 8000');
})

