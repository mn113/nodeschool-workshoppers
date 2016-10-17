// returns file listing (ls) filtered by .extension
// syntax:
// $ node 5_filteredls.js path/to/dir extension

var fs = require('fs'),			// filesystem module
	path = require('path'),		// path module
	inputPath = process.argv[2],
	filter = process.argv[3];

fs.readdir(inputPath, function(err, list) {
	// Callback for readdir()
	if (!err) {
		// Filtration:
		for (var i = 0; i < list.length; i++) {
			var extension = path.extname(list[i]);
//			console.log(extension);

			if (extension === '.' + filter) {
				console.log(list[i]);
			}
		}
	}
});



// SOLUTION:
/*
 var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
   if (err) return console.error(err)		// output errors
   files.forEach(function (file) {			// array.forEach option
	 if (path.extname(file) === ext) {
	   console.log(file)
	 }
   })
 })
*/