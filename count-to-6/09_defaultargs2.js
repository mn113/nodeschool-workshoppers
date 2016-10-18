module.exports = function biscuit(str, marks = str.length) {
	return str + '!'.repeat(marks);
}