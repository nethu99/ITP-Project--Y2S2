const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const CustomerSchema = new Schema({
    NIC: { type: String, required: true, },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: String, required: true},
    Address: { type: String, required: true },
    CID: { type: String, required: true },
    

}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;