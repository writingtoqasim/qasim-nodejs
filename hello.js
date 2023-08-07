// var http = require('http');

// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('hello world, thanks!!');
// }).listen(8081);
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
