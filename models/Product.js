const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    MSRP: {
        type: String,
        required: true
    },
    buyPrice: {
        type: String
    },
    productCode: {
        type: String
    },
    product: {
        type: String
    },
    contactLastName: {
        type: String
    },
    productDescription: {
        type: String
    },
    productLine: {
        type: Object
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
        type: String
    },
},{ toJSON: { virtuals: true }, toObject: { virtuals: true }});

const StockSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    product: {
        type: Object       
    }
});

ProductSchema.virtual('stock', {
    ref: 'Stocks', // The model to use
    localField: 'date', // Find people where `localField`
    foreignField: '_id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: true,
    // options: { toObject : {virtuals:true},toJSON : {virtuals : true} } // Query options, see http://bit.ly/mongoose-query-options
  });

const Stocks = mongoose.model('Stocks', StockSchema);
const Products = mongoose.model('products', ProductSchema);

module.exports = Products;