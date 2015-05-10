var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
  // fs = require('fs');
  // fs.appendFile('customerSignup.txt', JSON.stringify(req.body) + ',', function (err) {
  //   if (err) return console.log(err);
  // });
	var pg = require('pg');	
	var connectionString = "postgres://mrvgznqwjrhmfo:0O7cEIHVZ1kXXIHyLQ1nvcifwK@ec2-23-21-96-129.compute-1.amazonaws.com:5432/dbo8l3cdcfpk01"
	pg.connect(connectionString, function(err, client) {
		client.query("CREATE TABLE IF NOT EXISTS customers(firstname varchar(64), lastname varchar(64))");
		client.query("INSERT INTO customers(firstname, lastname) values($1, $2)", ['Tinniam', 'Ganesh']);
		client.query("INSERT INTO customers(firstname, lastname) values($1, $2)", ['Anand', 'Karthik']);
	};
});

module.exports = router;
