// returns file listing (ls) filtered by .extension
// syntax:
// $ node 6_modular.js path/to/dir extension

var filterFiles = require('./6_module');

var output = filterFiles(process.argv[2], process.argv[3], function(err, data) {
	// Callback for mymodule():
	if (err) {
		console.log(err);
	}
	else {
		data.forEach(function(fileName) {
			console.log(fileName);
		});
	}
});
