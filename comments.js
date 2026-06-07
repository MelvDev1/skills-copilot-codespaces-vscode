// Create web server

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Comment = require("./models/comment");
// Connect to MongoDB
mongoose.connect("mongodb://localhost/comments", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
