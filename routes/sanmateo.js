var express = require("express");
var app = express.Router();
var clientUrl = "Https://sanmateo.primegov.com"
var client = "San Mateo"
var Form;
var innerUrl = "/sanmateo/"

module.exports = function (app) {

  app.get(innerUrl, function (req, res) {
    res.render("sanmateo/index", { clientUrl: clientUrl,client: client,form: false, innerUrl:false});
  });

  app.get(innerUrl+"ar_template_pc_1", function (req, res) {
    res.render("sanmateo/ar_template_pc_1", { clientUrl: clientUrl,client: client,form: 'ar_template_pc_1', innerUrl});
  });
  app.get(innerUrl+"ar_template_pc_2", function (req, res) {
    res.render("sanmateo/ar_template_pc_2", { clientUrl: clientUrl,client: client,form: 'ar_template_pc_2', innerUrl});
  });
  app.get(innerUrl+"agenda_report_form", function (req, res) {
    res.render("sanmateo/agenda_report_form", { clientUrl: clientUrl,client: client,form: 'Agenda Report Form', innerUrl});
  });
  //agenda_report_form_CCD_AdvancedPlanning
  app.get(innerUrl+"agenda_report_form_CCD_AdvancedPlanning", function (req, res) {
    res.render("sanmateo/agenda_report_form_CCD_AdvancedPlanning", { clientUrl: clientUrl,client: client,form: 'Agenda Report Form: CDD - Advanced Planning', innerUrl});
  });

}  