var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 5050;
var config = require('./config');
var searchRoutes = require("./routes/searchRoutes");

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// mongoose.connect("mongodb://localhost/todos", function (err) {
//     if (err) throw err;
//     console.log("Successfully connected to the database");
// });

app.use("/api/search", searchRoutes);

app.listen(port, function () {
    console.log("Server listening on port " + port);
});