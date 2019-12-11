var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.route('/orderDetails/:id')
 	.get(function (req, res) {
		res.render('orderDetails')
    });

const mongoose = require('mongoose');

const Orders = require('../models/Order');
router.post('/add', function(req, res, next) {
    console.log('in post')
    let ord = new Orders({
        _id: req.body.orderNumber,
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        requiredDate: req.body.requiredDate,
        shippedDate: req.body.shippedDate,
        status: req.body.status,
        comments: req.body.comments,
        customerNumber: req.body.customerNumber
    })
    ord.save(function(err) {
        if (err) console.log(err);
        // saved!
        res.redirect("/order");
    });
});

router.post('/del/:id', (req, res) => {
    Orders.deleteOne({ orderNumber: req.params.id }, function(err) {
        if (err) console.log(err)
            // deleted at most one tank document
        res.redirect("/order");
    });
})

router.post('/update/:id', function(req, res, next) {
    console.log('success')
    console.log(req.body._id)
    console.log(req.body.status)
    console.log(req.params.id)
    Orders.updateOne({ _id: req.params.id }, {
        orderDate: req.body.orderDate,
        requiredDate: req.body.requiredDate,
        shippedDate: req.body.shippedDate,
        status: req.body.status,
        comments: req.body.comments
    }, function(err, ree) {
        console.log(err)
        res.redirect("/order");
    });
});
module.exports = router;