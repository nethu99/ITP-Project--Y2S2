const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const InvetorySchema = new Schema({

    Itemid: { type: String, required: true },
    Name: { type: String, required: true },
    Brand: { type: String, required: true,},
    qty: { type: String, required: true },
    Supplier: { type: String, required: true },
    PDate: { type: String, required: true },
    PPrice: { type: String, required: true,},
    SPrice: { type: String, required: true },
    TProfit: { type: String, required: true },
   

}, {
    timestamps: true,
});

const Invetory = mongoose.model('Invetory', InvetorySchema);

module.exports = Invetory;