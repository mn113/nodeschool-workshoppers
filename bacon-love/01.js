// expose the stream generator as a module method
module.exports = (Bacon) => {
	// Values that sum up to 6
 	return Bacon.sequentially(100, [1,2,3]);
};
