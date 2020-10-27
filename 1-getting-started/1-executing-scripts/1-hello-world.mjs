//const http = require('http');
// in ECMAScript we do import instead of require
import { createServer } from 'http' ;

const server = createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
