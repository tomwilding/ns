var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
  // fs = require('fs');
  // fs.appendFile('customerSignup.txt', JSON.stringify(req.body) + ',', function (err) {
  //   if (err) return console.log(err);
  // });
	var conString = "pg://postgres:postgres@localhost:5432/customers";
	var client = new pg.Client(conString);
	client.connect();

	var insert_records = function(req, res) {
		// Creat table and insert 2 records into it
		client.query("CREATE TABLE IF NOT EXISTS customers(firstname varchar(64), lastname varchar(64))");
		client.query("INSERT INTO customers(firstname, lastname) values($1, $2)", ['Tinniam', 'Ganesh']);
		client.query("INSERT INTO customers(firstname, lastname) values($1, $2)", ['Anand', 'Karthik']);
	});
});

module.exports = router;
