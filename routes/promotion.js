var express = require('express');
var router = express.Router();
const Promotions = require('../models/Promotions')

router.post('/add', function (req, res, next) {
  // res.render('', { title: 'Express' });
  Promotions.insertMany([
    {
      _id : req.body._id,
      expiryDate : req.body.expiryDate,
      discount : req.body.discount,
      amount : req.body.amount,
      type : req.body.type
    }
  ]).then((data, err) => {
    console.log(req.param)
    res.redirect('/promotions');
  })
  
});

module.exports = router;