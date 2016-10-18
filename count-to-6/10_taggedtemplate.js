// tagger function:
function html(template, ...args) {		// multiple args, but ...treat as array

	let cleanArgs = args.map(function(str) {
		// Regex x5:
		str = str.replace(/&/g, '&amp;')
				 .replace(/\'/g, '&apos;')
				 .replace(/\"/g, '&quot;')
				 .replace(/</g, '&lt;')
				 .replace(/>/g, '&gt;');
		return str;
	});
	
	// Glue args into template:
	let	output = '';
	for (var i = 0; i < cleanArgs.length; i++) {
		output += template[i] + cleanArgs[i];
	}
	return output + template[template.length - 1];	// don't forget last item!
}

// get args:
let name = process.argv[2],
	comment = process.argv[3];

// tagged template:
console.log(html`<b>${name} says</b>: "${comment}"`);

