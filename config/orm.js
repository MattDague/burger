var connection = require("./connection.js");

var orm = {
    all:function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insert:function(table, cols, vals, cb){
 
        connection.query("INSERT INTO ? (?) VALUES (?)" [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });


    },
    update: function(table, objColVals, condition, cb) {

        connection.query("UPDATE ? SET ? WHERE ?", [table, objColVals, condition], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}

module.exports = orm;