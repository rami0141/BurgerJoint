// Setting up a mysql connection
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
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