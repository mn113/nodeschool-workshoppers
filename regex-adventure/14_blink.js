/*
Implement a custom markdown operator that will translate all text between
`@@...@@` and into `<blink>...</blink>` tags.
*/

var marked = require('marked');

module.exports = function (str) {

	str = marked(str);

	while (/@@/.test(str)) {
		str = str.replace("@@", "<blink>");
		str = str.replace("@@", "</blink>");
	}

    return str;
};
