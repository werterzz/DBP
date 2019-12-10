const mongoose = require('mongoose');

const PaymentsSchema = new mongoose.Schema({
  amount: {
    type: String
  },
  checkNumber: {
    type: String
  },
  customerNumber: {
    type: String
  },
  paymentDate: {
    type: String
  }
});

const Payments = mongoose.model('Payments', PaymentsSchema);

module.exports = Payments;
