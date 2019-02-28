var express = require("express");
var app = express.Router();
var clientUrl = "https://goodyearaz.primegov.com"
var client = "City of Good Year"
var Form = "City of Good Year"
var innerUrl = "/goodyear/"

module.exports = function (app) {

  app.get(innerUrl, function (req, res) {
    res.render("goodyear/index", {clientUrl: clientUrl,client: client,form: false, innerUrl: false});
  });
}