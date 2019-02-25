var express = require("express");
var app = express.Router();
var clientUrl = "https://cityofbranson.primegov.com"
var client = "City of Branson"
var Form = "City of Branson"

module.exports = function (app) {

  app.get("/branson/", function (req, res) {
    res.render("branson/index", {clientUrl: clientUrl,client: client,form: false});
  });
  app.get("/branson/CodeAmendment", function (req, res) {
    res.render("branson/CodeAmendment", {clientUrl: clientUrl,client: client,form: "Code Amendment"});
  });
  app.get("/branson/bid-proposal", function (req, res) {
    res.render("branson/bid-proposal", {clientUrl: clientUrl,client: client,form: "Bid Proposal"});
  });
}  