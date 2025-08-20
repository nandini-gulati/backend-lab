//Reading a text file on the server using http and fs module.
// File: textFileServer.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const server = http.createServer((req, res) => {

  const filePath = path.join(__dirname, 'server.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: File not found!');
    } else {

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
