var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

/* GET home page. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("classicModels");
        dbo.collection("employees").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.render("index", { employee: result, title: "home" }, );
            db.close();
        });
    });

});

router.get('/employeeInformation', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("classicModels");
        dbo.collection("employees").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.render("employeeInformation", { employees: result, title: "hello" }, );
            db.close();
        });
    });
});


router.get('/home', function(req, res, next) {
    res.render('Gindex', { title: 'Express' });
});
router.get('/hello', function(req, res, next) {
    res.render('hello', { title: 'Express' });
});

router.post('/post/employee', function(req, res, next) {
    res.redirect("/employeeInformation");
});

router.post('/del/employee', function(req, res, next) {
    res.redirect("/employeeInformation");
});


module.exports = router;