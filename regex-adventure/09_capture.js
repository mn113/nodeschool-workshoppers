module.exports = function (str) {
	//searches for the string `x=` followed by numbers and returns the number found after the equal sign.
	// only match `x=` when there are no word characters immediately before `x=` or immediately after the number to the right of the equal sign.
	var m = /\bx=([0-9]+)\b/.exec(str);
    return m ? m[1] : null;
};
