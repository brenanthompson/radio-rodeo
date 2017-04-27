var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
var config = require('./config');
var Audiosearch = require("./audiosearch-client-node-master/index");

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// mongoose.connect("mongodb://localhost/todos", function (err) {
//     if (err) throw err;
//     console.log("Successfully connected to the database");
// });

app.get("/", function(req, res){
   var audiosearch = new Audiosearch(config.audiosearchAppId, config.audiosearchSecret);
   audiosearch.searchEpisodes(req.query).then(function (results) {
       res.send(results)
   });
});

app.listen(port, function () {
    console.log("Server listening on port" + port);
});