/* make an http GET request to specified url
 *
 * syntax:
 * $ node 7_httpget.js url
 */

var http = require('http');			// http module

if (process.argv[2]) {
	var url = process.argv[2];
}

http.get(url, function(response) {
	// Callback for http.get():
	response.setEncoding('utf8');
	
	response.on("data", function(data) {
		console.log(data);
	});

	response.on("error", console.error);

}).on("error", console.error);