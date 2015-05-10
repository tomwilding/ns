var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
	var pg = require('pg'); 
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	  client.query("INSERT INTO customers(firstname, lastname, email, contact) values($1, $2, $3, $4)", [res.body.firstName, req.body.lastName, req.body.email, req.body.contact]);
	});
});

module.exports = router;
