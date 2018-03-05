//Importing ORM to create functions that will interact with the database
var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

   // The variables cols and vals are arrays.
  //creates a burger in the database
  insertOne: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //updates a burger in the database
  updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersControllers.js).
module.exports = burger;