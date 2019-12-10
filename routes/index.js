var express = require('express');
// const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs');
const passport = require('passport');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const User = require('../models/User');
const Offices = require('../models/Offices');
const Employees = require('../models/Employees');
const Orders = require('../models/Order');
// const Products = require('../models/Products')
const OrderDetail = require('../models/OrderDetail');
const Customer = require('../models/Customer');
const Promotions = require('../models/Promotions')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

/* GET home page. */

router.get('/', function(req, res, next) {
    // console.log(req.user)

    res.render('Gindex', { title: "Home", user: req.user });
});

router.get('/employeeInformation', function(req, res, next) {
    if (req.user == null) res.send('please login')
    if(req.user.jobTitle === 'VP Sales') {
    Employees.find({jobTitle : { $regex: '.*' + 'Sale Manager' + '.*' }, jobTitle : { $regex: '.*' + 'Sales Manager' + '.*' }}).populate('office').exec().then((data,err) => {
        if (err) res.send(err)
        // console.log(data)
        res.render('employeeInformation', { user: req.user, employees: data, title: "Employee" })
    })
    }
    else if (req.user.jobTitle.includes('Sale Manager') || req.user.jobTitle.includes('Sales Manager')){
        Employees.find({jobTitle : { $regex: '.*' + 'Sales Rep' + '.*' }}).populate('office').exec().then((data,err) => {
            if (err) res.send(err)
            // console.log(data)
            res.render('employeeInformation', { user: req.user, employees: data, title: "Employee" })
        })
    }
    else {
        Employees.find({}).populate('office').exec().then((data,err) => {
            if (err) res.send(err)
            // console.log(data)
            res.render('employeeInformation', { user: req.user, employees: data, title: "Employee" })
        })
    }
});

router.get('/customer', (req, res, next) => {
    Customer.find().then((customer) => {
        res.render('customer', { customers: customer, title: "Customer" });
    });
});


router.get('/order', function (req, res, next) {
    Orders.find().populate('customer').exec().then((order) => {
        Orders.find().populate('product').exec().then((order_product) => {
        res.render('order', { user: req.user, orders : order, order_p : order_product , title: "Order" })
    })
    // Products.find().then((product) => {
    //     res.render('product' , {products : product})
    // })
})
//   Order.find().then((order) => {
//     OrderDetail.find().then((orderDetail) => { console.log("bello")
//       Customer.find().then((customer) => {
//         res.render('order', { user: req.user , orders : order , orderDetails : orderDetail , customers : customer , title: "hello" });
//       });
//     });
//   });
});

router.get('/orderDetails', (req, res, next) => {
        res.render('orderDetails', {title: "Order Details" });
});

router.get('/hello', function(req, res, next) {
    res.render('hello', { title: "Hello", user: req.user });
});


// router.post('/employeeInformation/add', function (req, res, next) {
//   res.redirect("/employeeInformation");
// });


// router.post('/del/employee', function (req, res, next) {
//   res.redirect("/employeeInformation");
// });

router.post('/login', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("classicModels");
        var query = { employeeNumber: req.body.username }

        dbo.collection("employees").find(query).toArray(async function(err, result) {
            if (err) throw err;
            console.log(result);
            try {
                if (await bcrypt.compare(req.body.password, result[0].password)) {
                    res.send('Success')
                } else {
                    res.send('Not Allowed')
                }
            } catch {
                res.status(500).send()
            }
            db.close();
        });


    });
});

router.get('/stockproduct', function(req, res, next) {
    res.render('stockProduct', { title: "Product", user: req.user });
});

router.get('/test', (req, res) => {
    res.send(req);
});

router.post('/addpassword', (req, res) => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("classicModels");
        dbo.collection("employees").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            result.forEach(async element => {
                var hashedPassword = await bcrypt.hash("password" + element.employeeNumber, 10)
                let query = { employeeNumber: element.employeeNumber }
                let newvalue = { $set: { password: hashedPassword } };
                dbo.collection("employees").updateOne(query, newvalue, (err, res) => {
                    if (err) throw err;
                    console.log("1 document updated");
                });
            });


            res.json(result);
            // db.close();
        });
    });
    // res.json(users)
})


// Login
router.post('/login2', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
        // failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    // req.flash('success_msg', 'You are logged out');
    res.redirect('/');

});


router.get('/employeeInformation/promote/:id', (req, res) => {
    console.log(req.params.id)
    Employees.find({ employeeNumber: req.params.id }).then((emp) => {
        console.log(emp)
        if (req.user.jobTitle === 'VP Sales' && emp[0].jobTitle.includes('Sales Manager')) {
            emp[0].jobTitle = 'VP Sales';
            emp[0].save();
        }
        if (req.user.jobTitle.includes('Sales Manager') && emp[0].jobTitle === 'Sales Rep') {
            console.log('in');
            emp[0].jobTitle = 'Sales Manager';
            emp[0].save();
        }

        res.redirect("/employeeInformation");
    });
    // res.send(req.params.id);
});

router.get('/employeeInformation/demote/:id', (req, res) => {
    console.log(req.params.id)
    Employees.find({ employeeNumber: req.params.id }).then((emp) => {
        console.log(emp)
        if (req.user.jobTitle === 'VP Sales' && emp[0].jobTitle.includes('Sales Manager')) {
            emp[0].jobTitle = 'Sales Rep';
            emp[0].save();
        }
        if (req.user.jobTitle.includes('President') && emp[0].jobTitle === 'Sales Manager') {
            emp[0].jobTitle = 'Sales Rep';
            emp[0].save();
        }
        if (req.user.jobTitle.includes('President') && emp[0].jobTitle === 'VP Sales') {
            emp[0].jobTitle = 'Sales Manager';
            emp[0].save();
        }

        res.redirect("/employeeInformation");
    });
    // res.send(req.params.id);
});

router.get('/testme', (req, res) => {
    Employees.find({}).populate('office').exec().then((data,err) => {
        if (err) res.send(err)
        console.log(data)
        res.send(data[0])
    })
    // Employees.findOne({employeeNumber:"1165"}).then((emp) => {
    //     res.send(emp)
    // })
    
})

router.get('/promotions', (req, res) => {
    Promotions.find().then(data => {
        res.render('promotions', { title: "Product", user: req.user, promotions : data })
    })
})


module.exports = router;