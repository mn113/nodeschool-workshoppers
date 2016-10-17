/* create an HTTP server which returns JSON data from an ISO time input
 *
 * syntax:
 * $ node 13_jsonapi.js port
 */

var http = require('http'),
	url = require('url');

var server = http.createServer(function(request, response) {
	// Listening:	
	if (request.method === 'GET') {
		
		// Parse request URL to object:
		var myUrl = url.parse(request.url, true),
		// Extract ISO time:
			date = new Date(myUrl.query.iso);
		
		if (date) {
			// Build response objects:
			var dateObj = {
				'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
			};
			var unixTimeObj = {
				'unixtime': date.getTime()
			};
			
			// Write to one of two outputs:
			if (myUrl.pathname === '/api/parsetime') {
				
				response.writeHead(200, {'Content-Type': 'application/json'});
				response.end(JSON.stringify(dateObj));
			}
			else if (myUrl.pathname === '/api/unixtime') {
				
				response.writeHead(200, {'Content-Type': 'application/json'});
				response.end(JSON.stringify(unixTimeObj));
			}
			else {
				response.writeHead(404);
				response.end();
			}
			
		}
	}
});

//console.log("Starting Node server on port", process.argv[2]);
server.listen(Number(process.argv[2]));
