const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    product: {
        type: Object       
    }
});

const Stocks = mongoose.model('Stocks', StockSchema);

module.exports = Stocks;