const mongoose = require('mongoose');

const OfficesSchema = new mongoose.Schema({
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

const Offices = mongoose.model('offices', OfficesSchema);

module.exports = Offices;
