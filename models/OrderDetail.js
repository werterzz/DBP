const mongoose = require('mongoose');

const OrderDetailsSchema = new mongoose.Schema({
  orderLineNumber: {
    type: String
  },
  orderNumber: {
    type: String
  },
  priceEach: {
    type: String
  },
  productCode: {
    type: String
  },
  quantityOrdered: {
    type: String
  }
});

const OrderDetails = mongoose.model('OrderDetails', OrderDetailsSchema);

module.exports = OrderDetails;
