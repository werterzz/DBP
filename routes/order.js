var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

var orderA
router.route('/orderDetails')
 	.get(function (req, res) {
    orderA = req.body.orderNumber;
		res.sendFile(path + '/views/orderDetails.ejs');
    });
    
const mongoose = require('mongoose');

const Orders = require('../models/Order');
const OrderDetails = require('../models/OrderDetail');
router.post('/add', function(req, res, next) {
  console.log('in add')
      let ors = new OrderDetails({
        _id : req.body.orderNumber,
        orderNumber : req.body.orderNumber,
        productCode : req.body.productCode,
        quantityOrdered : req.body.qty,
        priceEach : req.body.priceEach,
        orderLineNumber : req.body.orderLineNumber
        })
        ors.save(function (err) {
          if (err) console.log(err);
          // saved!
          console.log('add details finish')
          
        });        
  });

  router.post('/addDetails', function(req, res, next) {
    console.log('in Details')
    let ors = new OrderDetails({
        _id : req.body.orderNumber,
        orderNumber : req.body.orderNumber,
        productCode : req.body.productCode,
        quantityOrdered : req.body.qty,
        priceEach : req.body.priceEach,
        orderLineNumber : req.body.orderLineNumber
        })
        ors.save(function (err) {
          if (err) console.log(err);
          // saved!
          res.redirect("/order");
        });
  });

router.post('/del/:id', (req, res) => 
  {
    Orders.deleteOne({ _id : req.params.id }, function (err) {
    if (err) console.log(err)
    // deleted at most one tank document
    res.redirect("/order");
  });
})

router.post('/update/:id', function (req, res, next) {
  console.log('success')
  console.log(req.body._id)
  console.log(req.body.status)
  console.log(req.params.id)
  Orders.updateOne(
    {_id : req.params.id},
    {
      orderDate: req.body.orderDate,
      requiredDate: req.body.requiredDate,
      shippedDate: req.body.shippedDate,
      status: req.body.status,
      comments: req.body.comments}, function(err, ree) { console.log(err)  
      res.redirect("/order");
    });
});
  module.exports = router;