var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const Products = require('../models/Products');

router.get('/', function(req, res, next) {
    Products.find({}).populate('stock').exec().then((data, err) => {
        if (err) res.send(err)

        res.render('stockProduct', { user: req.user, products: data, title: "Product" })
    })
});

router.post('/del/:id', (req, res) => {
    Products.deleteOne({ _id: req.params.id }, function(err) {
        if (err) console.log(err)
            // deleted at most one tank document
        res.redirect("/product");
    });
});

router.post('/update/:id', function(req, res, next) {
    Products.updateOne({ _id: req.params.id }, {
        MSRP: req.body.msrp,
        buyPrice: req.body.buyprice,
        productCode: req.body.productcode,
        productDescription: req.body.description,
        productLine: req.body.description,
        productName: req.body.productname,
        productScale: req.body.productscale,
        productVendor: req.body.productvendor,
        quantityInStock: req.body.quantityinStock
    }, function(err, ree) {
        res.redirect("/product");
    });
});

router.post('/add', function(req, res, next) {
    console.log("document inserted");
    let emp = new Products({
        _id: req.body.id,
        MSRP: req.body.msrp,
        buyPrice: req.body.buyprice,
        productCode: req.body.productcode,
        productDescription: req.body.description,
        productLine: {
            productLine: req.body.productline,
            htmlDescription: req.body.htmlDescription,
            image: req.body.image,
            textDescription: req.body.textDescription,
        },
        productName: req.body.productname,
        productScale: req.body.productscale,
        productVendor: req.body.productvendor,
        quantityInStock: req.body.quantityinStock
    })
    emp.save(function(err) {
        if (err) console.log(err);
        // saved!
        res.redirect("/product");
    });

});

module.exports = router;