var express = require("express");
var searchRoutes = express.Router();
var config = require('../config');
var Audiosearch = require("../audiosearch-client-node-master/index");

searchRoutes.get("/episodes", function(req, res){
    var audiosearch = new Audiosearch(config.audiosearchAppId, config.audiosearchSecret);
    audiosearch.searchEpisodes(req.query.q).then(function (results) {
        res.send(results)
    });
})

    .get("/shows", function(req, res){
        var audiosearch = new Audiosearch(config.audiosearchAppId, config.audiosearchSecret);
        audiosearch.searchShows(req.query.q).then(function (results) {
            res.send(results)
        });
    })

    .get("/related", function(req, res){
        var audiosearch = new Audiosearch(config.audiosearchAppId, config.audiosearchSecret);
        audiosearch.getRelated(results[1]._id)

})


module.exports = searchRoutes;