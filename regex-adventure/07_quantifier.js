module.exports = function (str) {
	//the entire filename is a sequence of one or more digits followed by `.jpg` or `.jpeg`
	return /^[0-9]+\.jpe?g$/.test(str);
};
