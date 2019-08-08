require("dotenv").config();
var pw = require("../keys");
var mysql = require("mysql");
var connection

//conection to jawsdb
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    //if jaws db connection fails go to mysql
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: pw.sql.password,
  database: "burgers_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
