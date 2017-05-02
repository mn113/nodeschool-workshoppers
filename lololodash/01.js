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

// 03. Foreach on Objects:
var forEach = function(collection) {
	_.forEach(collection, function(town) {
		if (town.population > 1) town.size = 'big';
		else if (town.population > 0.5) town.size = 'med';
		else town.size = 'small';

		return town;
	});
	return collection;
};

// export the worker function as a nodejs module
module.exports = forEach;
