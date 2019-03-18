var express = require("express");
var app = express.Router();
var clientUrl = "https://goodyearaz.primegov.com"
var client = "City of Good Year"
var Form = "City of Good Year"
var innerUrl = "/goodyear/"

module.exports = function (app) {

  app.get(innerUrl, function (req, res) {
    res.render("goodyear/index", { clientUrl: clientUrl, client: client, form: false, innerUrl: false });
  });
  //City Council Action Request (CAR)
  app.get(innerUrl + 'City_Council_Action_request', function (req, res) {
    res.render("goodyear/City_Council_Action_request", { clientUrl: clientUrl, client: client, form: "City Council Action Request (CAR)", innerUrl: false });
  });
  //P&Z City Council Action Request (CAR)
  app.get(innerUrl + 'P&ZCity_Council_Action_request', function (req, res) {
    res.render("goodyear/P&ZCity_Council_Action_request", { clientUrl: clientUrl, client: client, form: 'P&Z City Council Action Request (CAR)', innerUrl: false });
  });
  //Communication City Council Action Request (CAR)	
  app.get(innerUrl + 'Communication_City_Council_Action_request', function (req, res) {
    res.render("goodyear/Communication_City_Council_Action_request", { clientUrl: clientUrl, client: client, form: 'Communication City Council Action Request (CAR)	', innerUrl: false });
  });
  //Community Facilities District (CFD) City Council Action Request (CAR)
  app.get(innerUrl + 'CommunityFacilitiesDistrict', function (req, res) {
    res.render("goodyear/CommunityFacilitiesDistrict", { clientUrl: clientUrl, client: client, form: 'Community Facilities District (CFD) ', innerUrl: false });
  });

}