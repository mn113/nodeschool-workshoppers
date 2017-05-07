/* esversion: 6 */
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

// 04. _.every() and _.some() on a list of towns:
var warmOrHot = function(towns) {
	var warm = [],
		hot = [];

	_.forEach(Object.keys(towns), function(name) {
		var temperatures = towns[name];
		if (_.every(temperatures, (temp) => temp > 19)) {
			hot.push(name);
		}
		else if (_.some(temperatures, (temp) => temp > 19)) {
			warm.push(name);
		}
	});

	return {
		hot: hot,
		warm: warm
	};
};

// 05. _.chain()ing methods:
var chainer = function(words) {
	return _.chain(words)
			.map(word => word.toUpperCase())
			.map(word => word + 'CHAINED')
			.sortBy()
			.value();
};

// 06. groupBy & size:
var commentGrouper = function(comments) {
	// Group comments by username:
	var grouped = _.groupBy(comments, 'username');

	// Map to include the size:
	var counted = _.map(grouped, function(group, key) {
		return {
			username: key,
			comment_count: _.size(group)
		};
	});

	// Sort descending:
	return _.sortBy(counted, 'comment_count').reverse();
};

// 07. reduce:
var reducer = function(orders) {
	// Group orders by article_id:
	var grouped = _.groupBy(orders, 'article');

	var reduced = [];
	_.forEach(grouped, function(contentsArr, artKey) {
		// Reduce one group, to sum all quantities within it:
		var totalQuantity = _.reduce(contentsArr,
			function(accum, value) {
				return accum + value.quantity;
			},
		0);
		// Save total in a new order list:
		reduced.push({
			article: parseInt(artKey),
			total_orders: totalQuantity
		});
	});

	return _.sortBy(reduced, 'total_orders').reverse();
};

// 08. filter with a callback function
var filterOnIncome = function(people) {
	// Mean income = total / number:
	var mean = _.reduce(people,
		function(accum, person) {
			return accum + person.income;
		},
		0
	) / _.size(people);

	var underperform = _.filter(people, person => person.income <= mean);
	var overperform = _.filter(people, person => person.income > mean);

	return {
		average: mean,
		underperform: _.sortBy(underperform, 'income'),
		overperform: _.sortBy(overperform, 'income')
	};
};

// export the function for the exercise we are doing as a nodejs module:
module.exports = filterOnIncome;
