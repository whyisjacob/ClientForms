var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');


 
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
require("./routes/mainroutes.js")(app);
require("./routes/branson.js")(app);
require("./routes/sanmateo.js")(app);
require("./routes/goodyear.js")(app);
require("./routes/OpenSpaceAuthority.js")(app);






app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});