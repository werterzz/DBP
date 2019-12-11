const mongoose = require('mongoose');
const Products = require('../models/Products');

const StocksSchema = new mongoose.Schema({
    _id : {
        type: Number
    },
    recordDate: {
        type: Date,
        required: true
    },
    products: [{
        _id: {type: String},
        amount: {type: Number}
    }]
},{ toJSON: { virtuals: true }, toObject: { virtuals: true }});

// const ProductsSchema = new mongoose.Schema({
//     MSRP: {
//         type: String,
//         required: true
//     },
//     buyPrice: {
//         type: String
//     },
//     _id: {
//         type: String
//     },
//     product: {
//         type: String
//     },
//     contactLastName: {
//         type: String
//     },
//     productDescription: {
//         type: String
//     },
//     productLine: {
//         type: Object
//     },
//     productName: {
//         type: String,
//         required: true
//     },
//     productScale: {
//         type: String
//     },
//     productVendor: {
//         type: String
//     },
//     quantityInStock: {
//         type: String
//     },
// });

StocksSchema.virtual('product', {
    ref: 'Products', // The model to use
    localField: 'products._id', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
    // options: { toObject : {virtuals:true},toJSON : {virtuals : true} } // Query options, see http://bit.ly/mongoose-query-options
  });

const Stocks = mongoose.model('Stocks', StocksSchema);
// const Products = mongoose.model('Products', ProductsSchema);

module.exports = Stocks;