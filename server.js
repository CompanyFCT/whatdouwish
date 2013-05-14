var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});
  var objToJson = {'message':'hello world'};
  response.write(JSON.stringify(objToJson));
  response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');