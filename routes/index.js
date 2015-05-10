var express = require('express');
var router = express.Router();

/* POST customer data */
router.post('/submitCustomerData', function(req, res, next) {
  // fs = require('fs');
  // fs.appendFile('customerSignup.txt', JSON.stringify(req.body) + ',', function (err) {
  //   if (err) return console.log(err);
  // });
});

module.exports = router;
