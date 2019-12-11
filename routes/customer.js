var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
// const db = require('monk')("localhost:27017/classicModels")
const Customer = require('../models/Customer');

router.get('/', function(req, res, next) {
    res.render("customerModal", { title: "Add Customer" });
});

router.get('/customer/submit', function(req, res, next) {
    res.render("customerModal", { title: "Customer" });
});

router.post('/del/:id', (req, res) => {
    Customer.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err)
    // deleted at most one tank document
    res.redirect("/customer");
  });
});

router.post('/update/:id', function (req, res, next) {
    Customer.updateOne({
        customerName: req.body.customerName,
        // customerNumber: req.body.cusnum,
        contactFirstName: req.body.contactFirstName,
        contactLastName: req.body.contactLastName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        postalCode: req.body.postalCode,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit}, function(err, ree) {
        
        res.redirect("/customer");
      // Updated at most one doc, `res.modifiedCount` contains the number
      // of docs that MongoDB updated
    });
  });

  router.post('/add', function(req, res, next) {
    console.log("document inserted");
    let cus = new Customer({
            _id: req.body.id,
            customerName: req.body.name,
            // customerNumber: req.body.cusnum,
            contactFirstName: req.body.conFname,
            contactLastName: req.body.conLname,
            phone: req.body.phone,
            addressLine1: req.body.addr1,
            addressLine2: req.body.addr2,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            postalCode: req.body.postal,
            salesRepEmployeeNumber: req.body.EmpNum,
            creditLimit: req.body.creditLim})
          cus.save(function (err) {
            if (err) console.log(err);
            // saved!
            res.redirect("/customer");
          });
  
  });



// router.post('/submit', [
//     check("id", "Please include id").not().isEmpty(),
//     check("name", "Please include name").not().isEmpty(),
//     check("conFname", "Please include Firstname").not().isEmpty(),
//     check("conLname", "Please include Lastname").not().isEmpty(),
//     check("phone", "Please include phone").not().isEmpty(),
//     check("addr1", "Please include address").not().isEmpty(),
//     check("creditLim", "Please include creditlimit").not().isEmpty()
// ], function(req, res, next) {
//     const result = validationResult(req);
//     var errors = result.errors;

//     if (!result.isEmpty()) {
//         res.render('customer', { errors: errors, title: "Customer" });
//     } else {
//         //insert to db
//         var ct = db.get('customers');
//         ct.insert({
//             customerNumber: req.body.id,
//             customerName: req.body.name,
//             contactFirstName: req.body.conFname,
//             contactLastName: req.body.conLname,
//             phone: req.body.phone,
//             addressLine1: req.body.addr1,
//             addressLine2: req.body.addr2,
//             city: req.body.city,
//             state: req.body.state,
//             postalCode: req.body.postal,
//             salesRepEmployeeNumber: req.body.EmpNum,
//             creditLimit: req.body.creditLim,
//         }, function(err, customer) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 req.flash("success", "success");
//                 res.location('/customer');
//                 res.redirect('/customer');
//             }
//         })
//     }

// });

module.exports = router;