// include the Lo-Dash library
var _ = require("lodash");

var filterWhere = function(list) {
	return _.filter(list, {active: true});
};

// export the worker function as a nodejs module
module.exports = filterWhere;
