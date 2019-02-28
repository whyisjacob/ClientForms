var express = require("express");
var app = express.Router();
var clientUrl = "https://cityofbranson.primegov.com"
var client = "City of Branson"
var Form = "City of Branson"
var innerUrl = "/branson/"

module.exports = function (app) {

  app.get(innerUrl, function (req, res) {
    res.render("branson/index", {clientUrl: clientUrl,client: client,form: false, innerUrl: false});
  });
  app.get(innerUrl+"CodeAmendment", function (req, res) {
    res.render("branson/CodeAmendment", {clientUrl: clientUrl,client: client,form: "Code Amendment",innerUrl});
  });
  app.get(innerUrl+"bid-proposal", function (req, res) {
    res.render("branson/bid-proposal", {clientUrl: clientUrl,client: client,form: "Bid Proposal",innerUrl});
  });
  /**
   * Contract Approval
   */
  app.get(innerUrl+"Contract-Approval-Addendum", function (req, res) {
    res.render("branson/Contract-Approval-Addendum", {clientUrl: clientUrl,client: client,form: "Contract Approval - Addendum",innerUrl});
  });
  app.get(innerUrl+"Contract-Approval-Contract", function (req, res) {
    res.render("branson/Contract-Approval-Contract", {clientUrl: clientUrl,client: client,form: "Contract Approval - Contract",innerUrl});
  });
  app.get(innerUrl+"Contract-Approval-Renewal", function (req, res) {
    res.render("branson/Contract-Approval-Renewal", {clientUrl: clientUrl,client: client,form: "Contract Approval - Renewal",innerUrl});
  });
  app.get(innerUrl+"Ordinance-for-Everything-Else", function (req, res) {
    res.render("branson/Ordinance-for-Everything-Else", {clientUrl: clientUrl,client: client,form: "Ordinance-for-Everything-Else",innerUrl});
  });
  app.get(innerUrl+"Resolution-Template", function (req, res) {
    res.render("branson/Resolution-Template", {clientUrl: clientUrl,client: client,form: "Resolution Template",innerUrl});
  });
}  