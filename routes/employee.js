var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// const { check, validationResult } = require('express-validator');
// const db2 = require('monk')("localhost:27017/classicModels")

router.get('/', function(req, res, next) {
    res.render("EmployeeModal", { title: "Employee" });
});

router.get('/', function(req, res, next) {
    res.render("EmployeeDeleteModal");
});

router.get('/employee', function(req, res, next) {
    res.render("employee");
});

router.post('/del/employee', function(req, res, next) {
    console.log("lol document deleted");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myquery = { _id: req.params.id };
        dbo.collection("employees").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            res.redirect("/employeeInformation");
            db.close();
        });
    });
});

// router.delete('/', function (req, res) {
//   var id = req.params.id;
//   var collection = db.get().collection('employees');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//   });

//   res.json({ success: id })
// });

router.post('/add', function(req, res, next) {
    console.log("document inserted");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("classicModels");
        var myobj = { email: req.body.email }

        dbo.collection("employees").insertOne(myobj, function(err, res2) {
            if (err) throw err;
            console.log("document inserted");
            res.redirect("/employeeInformation");
            db.close();
        });
    });
});
//   router.post('/add',[
//     check("email","Please include email").not().isEmpty(),

// ], function(req, res, next) {
//     const result = validationResult(req);
//     var errors = result.errors;
//   if (!result.isEmpty()) {
//     res.render('employeeModal',{errors:errors});
//   }else{
//       //insert to db
//       var ct2=db2.get('employees');
//       ct2.insert({
//           email:req.body.email,
//           firstName:req.body.name,
//           Extension:req.body.extension,
//           Officecode:req.body.officeCode,
//           reportsTo:req.body.Report,
//           jobTitle:req.body.job,

//       },function(err,employee){
//           if(err){
//               res.send(err);
//           }else{
//             req.flash("success", "success");
//               res.location('/employeeInformation');
//               res.redirect('/employeeInformation');
//           }
//       })
//   }
// });

module.exports = router;