var express = require("express");
var app = express.Router();


module.exports = function (app) {

    app.get("/branson/", function (req, res) {
      res.render("branson/index");
    });
}  