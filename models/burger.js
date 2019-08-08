var orm = require("../config/orm.js");

var burger = {
  // calls to orm.all and passes in burgers as the request
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // calls to the insert orm and inserts burger values
  insert: function (cols, vals, cb) {
    orm.insert("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // calls to orm update and changes burger values
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
}

module.exports = burger;