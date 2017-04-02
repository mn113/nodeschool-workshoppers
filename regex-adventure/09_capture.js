module.exports = function (str) {
	//searches for the string `x=` followed by numbers and returns the number found after the equal sign.
	var m = /x=([0-9]+)/.exec(str);
    return m ? m[1] : null;
};
