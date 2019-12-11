const mongoose = require('mongoose');

const StocksSchema = new mongoose.Schema({
    _id : {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    product: {
        type: Array       
    }
});

const Stocks = mongoose.model('stocks', StocksSchema);

module.exports = Stocks;