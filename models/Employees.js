const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
  email: {
    type: String
  },
  employeeNumber: {
    type: String,
    required: true
  },
  extension: {
    type: String
  },
  firstName: {
    type: String
  },
  JobTitle: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  officeCode: {
    type: String
  },
  reportsTo : {
    type: String
  }

});

const Employees = mongoose.model('Employees', EmployeesSchema);

module.exports = Employees;
