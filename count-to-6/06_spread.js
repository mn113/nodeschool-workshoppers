let args = process.argv.splice(2);

let min = (Math.min(...args));	// spreads array into arguments

console.log(`The minimum of [${args}] is ${min}`);