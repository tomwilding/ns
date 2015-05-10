var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
	var pg = require('pg'); 
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	  client.query("INSERT INTO customers(firstname, lastname, email, number) values($1, $2, $3, $4)", [req.body.firstName, req.body.lastName, req.body.email, req.body.number]);
	});
});

module.exports = router;
