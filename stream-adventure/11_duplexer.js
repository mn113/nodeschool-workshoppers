/* Join stdin & stdout of a spawned process into a duplex stream
 *
 * Syntax:
 * node 11_duplexer.js
 */

var duplexer2 = require('duplexer2');
	

module.exports = function(cmd, args) {
	// Spawn a process:
	var child = require('child_process').spawn(cmd, args);
	
	// Duplex the streams:
	return duplexer2(child.stdin, child.stdout);
};