const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymnetSchema = new Schema({
    Cname: { type: String, required: true },
    CID: { type: String, required: true },
    BID: { type: String, required: true },
    Date: { type: String, required: true },
    ItemCode: { type: String, required: true },
    Qty: { type: String, required: true },
    Price: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Paymnet = mongoose.model("Paymnet",PaymnetSchema);

module.exports = Paymnet;