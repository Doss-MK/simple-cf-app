const http = require('http');

// Change the hostname to '0.0.0.0'
const hostname = '0.0.0.0'; // Listen on all interfaces
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello there, This is Doss MK 17!');
});

// Listen on the updated hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
