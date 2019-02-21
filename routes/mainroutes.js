var express = require("express");
var app = express.Router();
var clientUrl = "https://dev.primegov.com"
var client = "Dev"



module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index", {
      clientUrl: clientUrl,
      client: client,
    });
  });

  app.get('/web_solutions', function (req, res) {
    res.render("web_solutions");
  })

  app.get('/pricing', function (req, res) {
    res.render("pricing");
  })
  app.get('/contact', function (req, res) {
    res.render("contact", {
      messageSend: "Send us a message, we will respond within 3 business days."
    });
  })



  app.get('/try_thehashbrown', function (req, res) {
    res.render('noPersonInImage.handlebars', {
      layout: 'try_thehashbrown'
    });
  })

}