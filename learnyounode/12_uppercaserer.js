/* create an HTTP server which returns uppercase data
 *
 * syntax:
 * $ node 12_uppercaserer.js port
 */

var http = require('http'),
	map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
	

	if (request.method === 'POST') {

		// Send headers:
		response.writeHead(200, {'content-type': 'text/plain'});
		
		// Transform stream and pipe back to requester:
		request.pipe(map(function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}
	
});

server.listen(port);


