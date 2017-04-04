module.exports = function (str) {
	// the string contains exactly 8 columns of hex codes formatted like: 0xFF with one or more characters of trailing whitespace after each hex code to separate the columns.
	var hex = '0x[a-fA-F0-9]{2}';
	var hexSpace = hex + '[\s\\n]+';
	var hexOptionalSpace = hex + '[\s\\n]*$';
	var re = new RegExp('^' + hexSpace.repeat(7) + hexOptionalSpace);
	//return re.test(str);
	return /^0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]+0x[a-fA-F0-9]{2}[\s\\n]*$/.test(str);
};
