var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/check/:id', function(req, res, next) {
  console.log('in check')
  console.log(req.params.id)
  
  var str = req.params.id
  fancScale[index] = document.getElementById(str);
})
  module.exports = router;