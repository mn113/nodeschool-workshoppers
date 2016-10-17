/* module to return file listing (ls) filtered by .extension
 *
 * syntax:
 * $ node 6_modular.js path/to/dir extension
 */

var fs = require('fs'),			// filesystem module
	path = require('path');		// path module

module.exports = function(inputPath, filter, cb) {
	
	fs.readdir(inputPath, function(err, list) {
		// Callback for readdir()
	    if (err) return cb(err); 		// send errors to callback

	    else {
			var fileList = [];
	   
		    // Filtration:
			for (var i = 0; i < list.length; i++) {
				var extension = path.extname(list[i]);

				if (extension === '.' + filter) {
					fileList.push(list[i]);
				}
			}

			return cb(null, fileList);
		}
	});
	
};
