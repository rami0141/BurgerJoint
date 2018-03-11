// Setting up a mysql connection
var mysql = require('mysql');
require("dotenv").config();

//stash connection info in variables for easy adjustment
var dbHost = "localhost";
var dbPort = 3306;
var dbUser = "root";
var dbPassword = process.env.MYSQL_PASSWORD; //saved information for personal dba in .env
var dbDatabase = "burgers_db";

//connect the application up to the mysql dba.
var connection = mysql.createConnection({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});


// Make a connection
connection.connect(function(err) {
	if (err) {
		console.err("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;