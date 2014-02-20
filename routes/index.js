var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = true; // flip between true and false to test grid layout

	// your code goes here

  	res.render('index', projects);
};
