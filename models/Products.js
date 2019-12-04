const mongoose = require('mongoose');

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

const Product = mongoose.model('Products', ProductsSchema);

module.exports = Product;
