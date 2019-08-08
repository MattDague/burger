var express = require("express");
var path = require("path")

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
