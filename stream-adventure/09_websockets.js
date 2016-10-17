/* print string "hello\n" using websockets and browserify
 *
 * Syntax:
 * node 10_websockets.js
 */

var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');

stream.write('hello\n');