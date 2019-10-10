var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/employeeInformation', function(req, res, next) {
  res.render('employeeInformation', { title: 'Express' });
});


router.get('/home', function(req, res, next) {
  res.render('Gindex', { title: 'Express' });
});

module.exports = router;
