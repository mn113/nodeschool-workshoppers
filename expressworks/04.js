// Set up Express:
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

// The route and its response:
app.post('/form', function(req, res) {
	// Get 'str' value from the request (form submission) body, and reverse it:
	res.send(req.body.str.split('').reverse().join(''));
});

// Serve:
app.listen(process.argv[2]);
