/* http client which POSTs data to a url and outputs response
 *
 * Syntax:
 * node 08_httpclient.js
 */

var http = require('http'),
	request = require('request');

process.stdin
	.pipe(request.post('http://localhost:8099'))
	.pipe(process.stdout)