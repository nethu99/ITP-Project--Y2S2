const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    SID: { type: String, required: true },
    Fname: { type: String, required: true },
    LName: { type: String, required: true },
    Address: { type: String, required: true },
    NIC: { type: String, required: true },
    TP: { type: String, required: true },
   
   
}, {
    timestamps: true,
});

const Supplier = mongoose.model("Supplier",SupplierSchema);

module.exports = Supplier;