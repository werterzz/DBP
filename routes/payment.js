var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const Payments = require('../models/Payment');
router.post('/add', function(req, res, next) {
    let pmt = new Payments({
        _id : req.body.chequeNumber,
        checkNumber : req.body.chequeNumber,
        amount: req.body.amount,
        paymentDate: req.body.paymentDate,
        customerNumber: req.body.customerNumber
        })
        pmt.save(function (err) {
          if (err) console.log(err);
          // saved!
          res.redirect("/payment");
        });
  });

router.post('/del/:id', (req, res) => 
  {
    Payments.deleteOne({ checkNumber : req.params.id }, function (err) {
    if (err) console.log(err)
    // deleted at most one tank document
    res.redirect("/payment");
  });
})

router.post('/update/:id', function (req, res, next) {
  Payments.updateOne(
    {checkNumber : req.params.id},
    {
        amount: req.body.amount,
        paymentDate: req.body.paymentDate,
        customerNumber: req.body.customerNumber
    }, function(err, ree) { 
      res.redirect("/payment");
    });
});
  module.exports = router;