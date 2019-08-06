var express = require("express");
var app = express();


var PORT = process.env.PORT || 3000;

//express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
// require("")(app)
// require("")(app)

//listn to show connection
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
