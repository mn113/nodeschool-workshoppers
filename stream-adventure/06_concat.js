/* Pipes stdin stream through a string reverser
 *
 * Syntax:
 * node 06_concat.js
 */

var concat = require('concat-stream');

process.stdin
	.pipe(concat(function(body) {
		// Callback of concat; body is the complete buffer
		// Reverse string:
		var x = body.toString().split('').reverse().join('');
		process.stdout.write(x);
	}));
