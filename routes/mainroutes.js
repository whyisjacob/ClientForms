var express = require("express");

var app = express.Router();



module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index");
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