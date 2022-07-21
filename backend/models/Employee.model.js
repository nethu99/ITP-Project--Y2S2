const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const EmployeeSchema = new Schema({

    Eid: { type: String, required: true },
    Name: { type: String, required: true },
    Department: { type: String, required: true,},
    Address: { type: String, required: true },
    Number: { type: String, required: true },
    Email: { type: String, required: true },
    Gender: { type: String, required: true,},
    DOB: { type: String, required: true },
   

}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;