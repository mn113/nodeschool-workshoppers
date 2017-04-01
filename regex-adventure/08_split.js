module.exports = function (str) {
	// splits the string on commas separated by arbitrary amounts of whitespace.
    return str.split(/\s*,\s*/);
}
