var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const mongoose = require('mongoose');

const Stocks = require('../models/Stocks');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    Stocks.find({}).populate('product').exec().then((data, err) => {
      if (err) res.send(err)
        console.log(data[0].product.productName) // 
      res.render('lot', { user: req.user, stocks: data, title: "Stock" })
    })
  });

  router.post('/del/:id', (req, res) => {
    Stocks.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err)
    // deleted at most one tank document
    res.redirect("/stock");
  });
  });
  
  router.post('/update/:id', function (req, res, next) 
  {
      Stocks.updateOne({_id: req.params.id},
          {
        recordDate: req.body.date,
        products: {
            _id: req.body.productid,
            amount: req.body.qty
          }
        }, function(err, ree) {
          res.redirect("/stock");
      });
    });
  
  router.post('/add', function(req, res, next) {
    console.log("document inserted");
    let abc = new Stocks({  
          _id: req.body.id,      
          date: req.body.date,
          products: {
            _id: req.body.productid,
            amount: req.body.qty
          }
          })
          abc.save(function (err) {
            if (err) console.log(err);
            // saved!
            res.redirect("/stock");
          });
  
  });

module.exports = router;