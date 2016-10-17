/* create a TCP server which responds with a time string 'YYYY-MM-DD hh:mm'
 *
 * syntax:
 * $ node 10_timeserve.js port
 */

var net = require('net'),
	strftime = require('strftime');

var server = net.createServer(function(socket) {
	// Listener:
	var dateString = strftime('%F %H:%M\n', new Date());
	
	socket.write(dateString);
	socket.end();
});

server.listen(process.argv[2]);