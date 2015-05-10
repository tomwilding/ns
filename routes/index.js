var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
  // fs = require('fs');
  // fs.appendFile('customerSignup.txt', JSON.stringify(req.body) + ',', function (err) {
  //   if (err) return console.log(err);
  // });
	var pg = require('pg'); 
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	  client.query("CREATE TABLE IF NOT EXISTS customers(firstname varchar(64), lastname varchar(64))");
	  client.query("INSERT INTO customers(firstname, lastname) values($1, $2)", ['Tinniam', 'Ganesh']);
	});
});

module.exports = router;
