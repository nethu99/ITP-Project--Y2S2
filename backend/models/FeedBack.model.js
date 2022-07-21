const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const FeedBackSchema = new Schema({
    FID: { type: String, required: true },
    Cname: { type: String, required: true },
    ItemName: { type: String, required: true },
    Description: { type: String, required: true },
    Rating: { type: String, required: true },
    Date: { type: String, required: true },


}, {
    timestamps: true,
});



const FeedBack = mongoose.model('FeedBack', FeedBackSchema);

module.exports = FeedBack;