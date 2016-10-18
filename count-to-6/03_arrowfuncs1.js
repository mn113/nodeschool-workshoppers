var inputs = process.argv.slice(2);
var result = inputs.map(word => word[0])				// isolates first letter
                   .reduce((prev, cur) => prev + cur);	// joins strings

console.log(`[${inputs}] becomes "${result}"`);