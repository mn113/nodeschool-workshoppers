module.exports = function (str) {
	// returns whether the string starts with `cat`, `dog`, or `robot` followed by a number to the end of the string.
	return /^(cat|dog|robot)[0-9]+$/.test(str);
};
