const http = require('http');
const currentDateTime = require('./myFirstModule')
const uc = require('upper-case');
const fs = require('fs');
const rs = fs.createReadStream('./test.txt');

http.createServer ((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    const message = uc.upperCase('hello world');
    res.end(message + currentDateTime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');