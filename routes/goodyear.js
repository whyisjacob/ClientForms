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
  app.get(innerUrl + 'Staff_Report_New', function (req, res) {
    res.render("goodyear/Staff_Report_New", {clientUrl: clientUrl,client: client,form: false, innerUrl: false});
  });
  app.get(innerUrl + 'Staff_Report_P&Z_NEW', function (req, res) {
    res.render("goodyear/Staff_Report_P&Z_NEW", {clientUrl: clientUrl,client: client,form: 'Staff_Report_P&Z_NEW', innerUrl: false});
  });
  //Communication_Items
  app.get(innerUrl + 'Communication_Items', function (req, res) {
    res.render("goodyear/Communication_Items", {clientUrl: clientUrl,client: client,form: 'Communication Items', innerUrl: false});
  });

}