var express = require("express");
var app = express.Router();
var clientUrl = "Https://sanmateo.primegov.com"
var client = "City of Branson"
var Form = "City of Branson"

module.exports = function (app) {

  app.get("/sanmateo/", function (req, res) {
    res.render("sanmateo/index", { clientUrl: clientUrl,client: client,form: false});
  });

  app.get("/sanmateo/ar_template_pc_1", function (req, res) {
    res.render("sanmateo/ar_template_pc_1", { clientUrl: clientUrl,client: client,form: 'ar_template_pc_1'});
  });
  app.get("/sanmateo/ar_template_pc_2", function (req, res) {
    res.render("sanmateo/ar_template_pc_2", { clientUrl: clientUrl,client: client,form: 'ar_template_pc_2'});
  });
  app.get("/sanmateo/agenda_report_form", function (req, res) {
    res.render("sanmateo/agenda_report_form", { clientUrl: clientUrl,client: client,form: 'Agenda Report Form'});
  });
}  