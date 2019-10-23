var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
// const db = require('monk')("localhost:27017/classicModels")

router.get('/', function(req, res, next) {
    res.render("customerModal");
  });

router.get('/submit', function(req, res, next) {
    res.render("customerModal");
  });

router.post('/submit',[
    check("id","Please include id").not().isEmpty(),
    check("name","Please include name").not().isEmpty(),
    check("conFname","Please include Firstname").not().isEmpty(),
    check("conLname","Please include Lastname").not().isEmpty(),
    check("phone","Please include phone").not().isEmpty(),
    check("addr1","Please include address").not().isEmpty(),
    check("creditLim","Please include creditlimit").not().isEmpty()
], function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
  if (!result.isEmpty()) {
    res.render('customerModal',{errors:errors});
  }else{
      //insert to db
      var ct=db.get('customers');
      ct.insert({
          customerNumber:req.body.id,
          customerName:req.body.name,
          contactFirstName:req.body.conFname,
          contactLastName:req.body.conLname,
          phone:req.body.phone,
          addressLine1:req.body.addr1,
          addressLine2:req.body.addr2,
          city:req.body.city,
          state:req.body.state,
          postalCode:req.body.postal,
          salesRepEmployeeNumber:req.body.EmpNum,
          creditLimit:req.body.creditLim
      },function(err,customer){
          if(err){
              res.send(err);
          }else{
            req.flash("success", "success");
              res.location('/customer');
              res.redirect('/customer');
          }
      })
  }
});

module.exports = router;