var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const customerPy = require('../models/Customer');
router.post('/add', function(req, res, next) {
    customerPy.findByIdAndUpdate(req.body.id, {
        $push: {
            payments: {
                _id: req.body.chequeNumber,
                amount: req.body.amount,
                paymentDate: req.body.paymentDate
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
        res.redirect("/payment");
    });
});

router.post('/del/:id', (req, res) => {
    customerPy.findByIdAndUpdate(req.body.customerNumber, {
        $pull: {
            payments: {
                _id: req.body.chequeNumber
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
        res.redirect("/payment");
    });
})

router.post('/update/:id', function(req, res, next) {
    let chequeNumber = req.body.chequeNumber;
    let cusNumber = req.body.customerNumber;
    let bAmount = req.body.amount;
    let date = req.body.paymentDate;
    customerPy.findByIdAndUpdate(cusNumber, {
        $pull: {
            payments: {
                _id: chequeNumber
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
    });
    customerPy.findByIdAndUpdate(cusNumber, {
        $push: {
            payments: {
                _id: chequeNumber,
                amount: bAmount,
                paymentDate: date
            }
        }
    }, function(err, ree) {
        if (err) console.log(err);
        res.redirect("/payment");
    });
});
module.exports = router;