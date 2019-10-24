var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const Employees = require('../models/Employees');

router.get('/', function(req, res, next) {
    res.render("EmployeeModal", { title: "Employee" });
});

router.get('/', function(req, res, next) {
    res.render("EmployeeDeleteModal");
});

router.get('/employee', function(req, res, next) {
    res.render("employee");
});


  // router.post('/del', function (req, res, next) {
  //   console.log("lol document deleted");
  //   Employees.find({employeeNumber: req.params.id}).then((emp) =>
  //   MongoClient.connect(url, function(err, db) {
  //     if (err) throw err;
  //     var dbo = db.db("classicModels");
  //     var myquery = { _id:req.params.id };
  //     dbo.collection("employees").deleteOne(myquery, function(err, obj) {
  //       if (err) throw err;
  //       console.log("1 document deleted");
  //       res.redirect("/employeeInformation");
  //       db.close();
  //     }); 
  //   }));
  // });
  router.post('/del/:id', (req, res) => {
        Employees.deleteOne({ employeeNumber: req.params.id }, function (err) {
        if (err) console.log(err)
        // deleted at most one tank document
        res.redirect("/employeeInformation");
      });
    });
    
  


  router.post('/update/:id', function (req, res, next) {
  //   console.log("document inserted");
    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("classicModels");
    //   var myquery = {_id: req.params.id};
    //   dbo.collection("employees").updateOne(myquery, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    //     res.redirect("/employeeInformation");
    //     db.close();
    //   });
    // });
    Employees.updateOne({email: req.body.email,
      employeeNumber: req.body.employeenumber,
      extension: req.body.Extension,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      jobTitle: req.body.job,
      officeCode: req.body.Officecode,
      password: req.body.password,
      reportsTo: req.body.Report}, function(err, ree) {
        
        res.redirect("/employeeInformation");
      // Updated at most one doc, `res.modifiedCount` contains the number
      // of docs that MongoDB updated
    });

  });
  
  


//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//   });

//   res.json({ success: id })
// });

router.post('/add', function(req, res, next) {
    console.log("document inserted");

    // MongoClient.connect(url, function (err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("classicModels");
    //   var myobj = { email: req.body.email,
    //     employeeNumber: req.body.employeenumber,
    //     extension: req.body.Extension,
    //     firstName: req.body.firstname,
    //     lastName: req.body.lastname,
    //     jobTitle: req.body.job,
    //     officeCode: req.body.Officecode,
    //     reportsTo: req.body.Report
    //   }
  
    //   dbo.collection("employees").insertOne(myobj, function(err, res2) {
    //     if (err) throw err;
    //     console.log("document inserted");
    //     res.redirect("/employeeInformation");
    //     db.close();
    //   });
    // });

    let emp = new Employees({email: req.body.email,
          employeeNumber: req.body.employeenumber,
          extension: req.body.Extension,
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          jobTitle: req.body.job,
          officeCode: req.body.Officecode,
          password: req.body.password,
          reportsTo: req.body.Report})
          emp.save(function (err) {
            if (err) console.log(err);
            // saved!
            res.redirect("/employeeInformation");
          });

  });


module.exports = router;