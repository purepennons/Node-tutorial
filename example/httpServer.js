var http = require('http');

var port = 3000;

var server = http.createServer(function(req, res) {
	// Get a request

	console.log('Get a request!');

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');	
}).listen(port);
console.log('Http server is listening at port ', port);
