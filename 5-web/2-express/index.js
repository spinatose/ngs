const express = require('express');

const server = express();

// with express you have to define a listener for every route that you wish to handle
server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.get('/about', (req, res) => {
  res.send('About!');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
