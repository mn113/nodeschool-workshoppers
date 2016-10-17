/* make an http GET request to specified url
 *
 * syntax:
 * $ node 8_httpcollect.js url
 */

var http = require('http');			// http module
var url = process.argv[2];

http.get(url, function(response) {
	// Callback for http.get():
	response.setEncoding('utf8');
	
	var responsesString = '';
	
	// Capture data string:
	response.on("data", function(data) {
//		console.log(data);
		responsesString += data;
	});

	// Output:
	response.on("end", function() {
		console.log(responsesString.length);
		console.log(responsesString);
	});

}).on("error", console.error);

