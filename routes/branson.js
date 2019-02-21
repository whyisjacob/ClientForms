var express = require("express");
var app = express.Router();
var clientUrl = "https://cityofbranson.primegov.com"
var client = "City of Branson"
var Form = "City of Branson"

module.exports = function (app) {

    app.get("/branson/", function (req, res) {
      res.render("branson/index", {
        clientUrl: clientUrl,
        client: client,
        form: false
      });
    });
}  