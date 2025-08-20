//Writing to the server using request-response statements as a callback in createServer() function.
const http = require('http');
const port = 8000; 
const server = http.createServer((req, res) => {
  res.end('Hello! Server is working on port ' + port);
});

server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
