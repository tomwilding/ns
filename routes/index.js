var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/submitCustomerData', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  fs = require('fs');
  fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
});

module.exports = router;
