const mongoose = require('mongoose');

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
  customerNumber: {
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

const ProductsSchema = new mongoose.Schema({
  ProductCode: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productLine: {
    type: String,
    required: true
  },
  productScale: {
    type: String,
    required: true
  },
  productVendor: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  quantityInStock: {
    type: String,
    required: true
  },
  buyPrice: {
    type: String,
    required: true
  },
  MSRP: {
    type: String,
    required: true
  }
});

const OrdersSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  orderNumber: {
    type: String
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
const Product = mongoose.model('Products', ProductsSchema);

module.exports = Orders;
