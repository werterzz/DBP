const mongoose = require('mongoose');
const ProductsSchema = require('./Products');

const customerSchema = new mongoose.Schema({
  addressLine1: {
      type: String,
      required: true
  },
  addressLine2: {
      type: String
  },
  city: {
      type: String
  },
  contactFirstName: {
      type: String
  },
  contactLastName: {
      type: String
  },
  country: {
      type: String
  },
  creditLimit: {
      type: String
  },
  customerName: {
      type: String,
      required: true
  },
  _id: {
      type: String
  },
  phone: {
      type: String
  },
  postalCode: {
      type: String
  },
  salesRepEmployeeNumber: {
      type: String,
      required: true
  },
  state: {
      type: String
  }
});



const OrdersSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  orderNumber: {
    type: Array
  },
  orderDate: {
    type: String
  },
  requiredDate: {
    type: String
  },
  shippedDate: {
    type: String
  },
  status: {
    type: String
  },
  comments: {
    type: String
  },
  customerNumber: {
    type: String
  }
},{ toJSON: { virtuals: true }, toObject: { virtuals: true }});

OrdersSchema.virtual('Customers', {
  ref: 'customers',
  localField: 'customerNumber',
  foreignField: '_id',
  justOne: true,
}),('Products', {
  ref: 'Products',
  localField: 'ProductsCode',
  foreignField: '_id',
  justOne: true,
});

const Orders = mongoose.model('Orders', OrdersSchema);
const customers = mongoose.model('customers', customerSchema);
// const Product = mongoose.model('Products', ProductsSchema);

module.exports = Orders;
