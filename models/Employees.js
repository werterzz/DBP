const mongoose = require('mongoose');

const OfficesSchema = new mongoose.Schema({
  _id : {
    type: String
  },
  addressLine1 : {
    type: String
  },
  addressLine2: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  officeCode: {
    type: String
  },
  phone: {
    type: String
  },
  postalCode: {
    type: String
  },
  state: {
    type: String
  },
  territory: {
    type: String
  }
});

const EmployeesSchema = new mongoose.Schema({
  _id : {
    type: String
  },
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
  jobTitle: {
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
    type: String,
  },
  reportsTo : {
    type: String
  }

},{ toJSON: { virtuals: true }, toObject: { virtuals: true }});

EmployeesSchema.virtual('office', {
  ref: 'Offices', // The model to use
  localField: 'officeCode', // Find people where `localField`
  foreignField: '_id', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: true,
  // options: { toObject : {virtuals:true},toJSON : {virtuals : true} } // Query options, see http://bit.ly/mongoose-query-options
});

const Offices = mongoose.model('Offices', OfficesSchema);
const Employees = mongoose.model('Employees', EmployeesSchema);

module.exports = Employees;
