var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const mongoose = require('mongoose');

const Stocks = require('../models/Stocks');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    Stocks.find({}).populate('product').exec().then((data, err) => {
      if (err) res.send(err)
        // console.log(data[0].product.productName) 
      res.render('lot', { user: req.user, stocks: data, title: "Stock" })
    })
  }); 

  router.post('/del/:id', (req, res) => {
    Stocks.findByIdAndUpdate(req.params.id, {
      $pull: {
          products: {
              _id: req.body.productid
          }
      }
  }, function(err, ree) {
      if (err) console.log(err);
      res.redirect("/stock");
  });
  });
  
  router.post('/update/:id', function (req, res, next) 
  {
    let recordDate = req.body.date;
    let pdId = req.body.productid;
    let qty = req.body.qty;
    Stocks.findByIdAndUpdate(req.params.id, {
        $pull: {
            products: {
                _id: pdId
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
    });
    Stocks.findByIdAndUpdate(req.params.id, {
        $push: {
            products: {
                _id: pdId,
                amount: qty,
                date: recordDate
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
        res.redirect("/stock");
    });
    });
  

  router.post('/add', function(req, res, next) {
    Stocks.findByIdAndUpdate(req.body.id, {
      $push: {
        products: {
          _id: req.body.productid,
          amount: req.body.qty,
          date: req.body.date
        }
      }
  }, function(err, ree) {
      if (err) console.log(err);
      res.redirect("/stock");
  });
});

module.exports = router;