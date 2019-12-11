const mongoose = require('mongoose');
// const Stocks = require('../models/Stocks');



const ProductsSchema = new mongoose.Schema({
    MSRP: {
        type: Number
    },
    buyPrice: {
        type: Number
    },
    _id: {
        type: String
    },
    productDescription: {
        type: String
    },
    productLine: {
        type: String
    },
    productName: {
        type: String,
        required: true
    },
    productScale: {
        type: String
    },
    productVendor: {
        type: String
    },
    quantityInStock: {
        type: Number
    },
},{ toJSON: { virtuals: true }, toObject: { virtuals: true }});


ProductsSchema.virtual('stock', {
    ref: 'Stocks', // The model to use
    localField: 'product', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
    // options: { toObject : {virtuals:true},toJSON : {virtuals : true} } // Query options, see http://bit.ly/mongoose-query-options
  });

// const Stocks = mongoose.model('Stocks', StocksSchema);
const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;