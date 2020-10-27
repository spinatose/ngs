const http = require('http');

const requestHandler = (req, res) => {
  console.log('Got request!!!') ;
  // req is of type http.IncomingMessage
  console.dir(req, { depth: 0 }); // tells console to do a shallow print of object (no nested)
  // res.end('Hola Mundo!\n') ; short-hand for two lines below
  res.write('Hola Mundo!\n') ;
  // res is of type http.ServerResponse
  // req and res are streams!
  res.end();
}

// const server = http.createServer(requestHandler); can do this to set up server and wire up request handler 
// OOOORRRRR
const server = http.createServer() ;
server.on('request', requestHandler) ;

// starts server
server.listen(4242, () => {
  console.log('Server is running...');
});
