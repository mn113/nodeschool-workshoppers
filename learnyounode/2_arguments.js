//console.log(process.argv);

// Multiple numerical arguments:
var prod = 0;
for (var i = 2; i < process.argv.length; i++) {
	prod += Number(process.argv[i]);
}

console.log(prod);