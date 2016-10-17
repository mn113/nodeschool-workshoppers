/* http server which returns uppercase data
 *
 * Syntax:
 * node 07_httpserver.js port
 */

var http = require('http');
var through = require('through2');


// Create server:
var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {	// ok
		req.pipe(through(function(buffer, encoding, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		}))
		.pipe(res);
	}
});

// Start server:
server.listen(process.argv[2]);