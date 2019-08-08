//initiate express and path for use later
var express = require("express");
var path = require("path")
//port for display
var PORT = process.env.PORT || 3000;
// variable for using express
var app = express();

//express functionality
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars usage
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// link to controller
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//links directory for css and js
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
