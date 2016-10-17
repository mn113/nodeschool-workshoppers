/* Pipes stdin stream through an uppercase/lowercase converter
 *
 * Syntax:
 * node 05_lines.js
 */

var split = require('split');
var through = require('through2');
var i = 1;

var stream = through(function write(buffer, encoding, next) {
	// Convert even lines to UPPER, odd lines to lower:
	if (i % 2 === 0) {
		this.push(buffer.toString().toUpperCase() + '\n');	
	}
	else {
		this.push(buffer.toString().toLowerCase() + '\n');	
	}
	i++;
	next();
});

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);
