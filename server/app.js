var path = require('path');
var express = require('express');
var FlashCardModel = require('./models/flash-card-model');
var bodyParser = require('body-parser');


var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/bower_components/', express.static(path.join(__dirname, '../bower_components')));

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.use(function (req, res, next) {
	console.log('made it')
	next();
});

app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, 500 + Math.random() * 1000);
    });

});

app.post('/cards', function(req, res, next) {
    //console.log(req.body);
    FlashCardModel.create({
        question: req.body.question,
        category: req.body.category,
        answers: req.body.answers
    }).then(function(card) {
        console.log('logging response: ', card);
        res.send(card);
    }).then(null, next);

})

