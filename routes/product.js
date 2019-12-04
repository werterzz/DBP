var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const Products = require('../models/Products');

router.get('/', function(req, res, next) {
  res.render("stockProduct", { title: "Stock" });
});

router.post('/update/:id', function (req, res, next) {
    Employees.updateOne({}, function(err, ree) {
        res.redirect("/product");
    });

  });

router.post('/add', function(req, res, next) {
  console.log("document inserted");
  let emp = new Products({        
        MSRP: req.body.msrp,
        buyPrice: req.body.buyprice,
        productCode: req.body.productcode,
        productDescription: req.body.description,
        productLine: req.body.description,
        productName: req.body.employeenumber,
        productScale: req.body.productscale,
        productVendor: req.body.productvendor,
        quantityInStock: req.body.quantityinStock})
        emp.save(function (err) {
          if (err) console.log(err);
          // saved!
          res.redirect("/product");
        });

});

module.exports = router;