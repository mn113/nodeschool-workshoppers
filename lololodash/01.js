// include the Lo-Dash library
var _ = require("lodash");

// 01. Filter a list, Object or JSON by a parameterised condition:
var filterWhere = function(list) {
	return _.filter(list, {active: true});
};

// 02. Sort an array by a named key:
var sortBy = function(list) {
	return _.sortBy(list, 'quantity').reverse();
};

// export the worker function as a nodejs module
module.exports = sortBy;
