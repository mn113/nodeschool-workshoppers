var fs = require('fs');	// filesystem
var inputFile = process.argv[2];

var inputContents = fs.readFile(inputFile, 'utf-8', function(err, data) {
	// Callback of readFile():
	if (!err) {
		var lines = data.split("\n");
		console.log(lines.length - 1);
	}
});
