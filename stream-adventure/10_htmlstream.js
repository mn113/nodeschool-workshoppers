/* Receive HTML, set the innerHTML of elements with class 'loud' to uppercase
 *
 * Syntax:
 * node 10_htmlstream.js
 */

var through = require('through2'),
	trumpet = require('trumpet'),
	tr = trumpet();		// initialise trumpet

// Send input to trumpet:
process.stdin.pipe(tr);

// Select elements:
tr.selectAll('.loud', function(loudEl) {
	var rs = loudEl.createReadStream();
	var ws = loudEl.createWriteStream();
		
	// Pipe into transformer, becoming a buffer:
	rs.pipe(through(function(buffer, encoding, next) {
			// Uppercase content:
			this.push(buffer.toString().toUpperCase());
			next();
		}))
	  .pipe(ws);
});

// Connect trumpet to stdout:
tr.pipe(process.stdout);
