const http = require('http');

const hostname = 'localhost'; // 127.0.0.1
const port = 3000;

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
