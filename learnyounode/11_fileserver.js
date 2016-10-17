/* create an HTTP file server
 *
 * syntax:
 * $ node 11_fileserver.js port file
 */

var http = require('http'),
	fs = require('fs');

var port = process.argv[2],
	filename = process.argv[3];

var server = http.createServer(function(request, response) {
	
	// Send headers:
	response.writeHead(200, {'content-type': 'text/plain'});

	// Read file as stream:
	var fileStream = fs.createReadStream(filename);
	
	// Pipe stream back to requester:
	fileStream.pipe(response);	
});

server.listen(port);