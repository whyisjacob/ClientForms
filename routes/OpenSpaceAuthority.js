var express = require("express");
var app = express.Router();
var clientUrl = "https://openspaceauthority.primegov.com"
var client = "Open Space Authority"
var Form = false;
var innerUrl = "/OpenSpaceAuthority/"

module.exports = function (app) {

  app.get(innerUrl, function (req, res) {
    res.render("OpenSpaceAuthority/index", {clientUrl: clientUrl,client: client,form: false, innerUrl: false});
  });
  app.get(innerUrl + 'AgendaItemReport', function (req, res) {
    res.render("OpenSpaceAuthority/AgendaItemReport", {clientUrl: clientUrl,client: client,form: "Agenda Item Report", innerUrl: false});
  });

}