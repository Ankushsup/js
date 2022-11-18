var http = require("http");  //to use the module of http

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plan' });

    response.end('Hello World\n');

}).listen(8081);

console.log('Server running ');