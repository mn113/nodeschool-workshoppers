var fs = require('fs');	// filesystem
var inputFile = process.argv[2];

var inputContents = fs.readFileSync(inputFile);	// buffer

// Count newlines:
var lines = inputContents.toString().split("\n");
console.log(lines.length - 1);