const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const SalesSchema = new Schema({

    IBillNO: { type: String, required: true, },
    CID: { type: String, required: true },
    ItemName: { type: String, required: true },
    ItemID: { type: String, required: true},
    Itemqty: { type: String, required: true },
    Cat: { type: String, required: true },
    Price: { type: String, required: true },
    PMethod: { type: String, required: true},
    Date: { type: String, required: true },


}, {
    timestamps: true,
});

const Sales = mongoose.model('Sales', SalesSchema);

module.exports = Sales;