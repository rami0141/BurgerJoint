//express app
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Routes
//All burgers in the database
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
//post new burger to the database
router.post("/", function(req, res) {
	burger.insertOne([
		"burger_name", "devoured"
	], [
		req.body.burger_name, req.body.devoured
	], function() {
		res.redirect("/");
	});
});

// This will mark burger as devoured
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(result) {
		res.redirect("/");
	});
});

// Export routes for server.js to use
module.exports = router;