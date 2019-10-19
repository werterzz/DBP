var express = require('express');
// const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs');
const passport = require('passport');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const User = require('../models/User');
const Offices = require('../models/Offices');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.user)

    res.render('Gindex', { title: 'Express', user: req.user });
});

router.get('/employeeInformation', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("classicModels");
    dbo.collection("employees").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result); res.render("employeeInformation", { employees: result, title: "hello", user: req.user });
      db.close();
    });
  });
});


router.get('/order', function (req, res, next) {
  res.render('order', { title: 'Express', user: req.user });
});





router.get('/hello', function (req, res, next) {
  res.render('hello', { title: 'Express', user: req.user });
});


router.post('/post/employee', function (req, res, next) {
  res.redirect("/employeeInformation");
});

router.post('/del/employee', function (req, res, next) {
  res.redirect("/employeeInformation");
});

router.post('/login', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("classicModels");
    var query = { employeeNumber: req.body.username }

    dbo.collection("employees").find(query).toArray(async function (err, result) {
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

router.get('/stockproduct', function (req, res, next) {
  res.render('stockProduct', { title: 'Express', user: req.user });
});

router.get('/test', (req, res) => {
  res.send(req);
});

router.post('/addpassword', (req, res) => {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("classicModels");
    dbo.collection("employees").find({}).toArray(function (err, result) {
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

module.exports = router;
