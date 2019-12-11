const mongoose = require('mongoose');



var paymentSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    checkNumber: {
        type: String,
        require: true
    },
    paymentDate: {
        type: Date
    }
});

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
        type: Number
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
    },
    point: {
        type: Number
    },
    payments: [{
        _id: {
            type: String
        },
        amount: {
            type: Number
        },
        checkNumber: {
            type: String,
            require: true
        },
        paymentDate: {
            type: Date
        }
    }]
});

const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;