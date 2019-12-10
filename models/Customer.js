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

const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;