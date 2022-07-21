const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    VID: { type: String, required: true },
    RNO: { type: String, required: true },
    Cat: { type: String, required: true },
    FType: { type: String, required: true },
    Capacity: { type: String, required: true },
    Description: { type: String, required: true },
    Date: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Delivery = mongoose.model("Delivery",DeliverySchema);

module.exports = Delivery;