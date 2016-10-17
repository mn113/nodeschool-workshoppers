/* make an http GET request to 3 specified urls
 *
 * syntax:
 * $ node 9_juggling.js url1 url2 url3
 */

var http = require('http');			// http module
var urls = [process.argv[2],
			process.argv[3],
			process.argv[4]];
var responses = ['','',''],
	ended = 0;

var getData = function(url, i) {
	
	http.get(url, function(response) {
		// Callback for http.get():
		response.setEncoding('utf8');

		// Capture data string:
		response.on("data", function(data) {
//			console.log(data);
			if (typeof data === "string") {
				responses[i] += data;
			}
		});

		// Log end of response:
		response.on("end", function() {
			ended++;
//			console.log("request", i, "ended");
			
			// See if all requests have ended:
			if (ended === 3) output();
		});

	}).on("error", console.error);
}

var output = function() {
	// Output data:
	for (var j = 0; j < 3; j++) {
		console.log(responses[j]);
	}	
};

// Launch asynchronous requests:
for (var i = 0; i < 3; i++) {
	getData(urls[i], i);
}
