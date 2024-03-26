const http = require('http');

//Create the server and start the server

const server = http.createServer((req, res) => {
    res.end('Hello from the server!!!!');
})

server.listen(8000, 'localhost', () => {
    console.log("Server is running in port 8000");
})


