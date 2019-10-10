var express = require('express');
var router = express.Router();

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/employeeInformation', function(req, res, next) {
  res.render('employeeInformation', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Express' });
});

module.exports = router;
