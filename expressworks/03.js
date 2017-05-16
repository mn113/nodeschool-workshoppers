// Set up Express:
var path = require('path');
var express = require('express');
var app = express();

// Set up Pug using templates folder:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

// The route and its response:
app.get('/home', function(req, res) {
	// Render index.pug, passing in 'date':
	res.render('index', { date: new Date().toDateString() });
});

// Serve:
app.listen(process.argv[2]);
