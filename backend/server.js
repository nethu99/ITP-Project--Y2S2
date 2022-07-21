const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully");
})

const PaymnetRouter = require('./routes/Paymnet');
const EmployeeRouter = require("./routes/Employee");
const FeedBackRouter = require("./routes/FeedBack");
const CustomerRouter = require('./routes/Customer');
const DeliveryRouter = require('./routes/Delivery');
const InvetoryRouter = require("./routes/Invetory");
const SalesRouter = require('./routes/Sales');
const SupplierRouter = require('./routes/Supplier');

app.use('/Paymnet', PaymnetRouter);
app.use("/Employee", EmployeeRouter);
app.use("/FeedBack", FeedBackRouter);
app.use('/Customer', CustomerRouter);
app.use('/Delivery', DeliveryRouter);
app.use("/Invetory", InvetoryRouter);
app.use('/Sales', SalesRouter);
app.use('/Supplier', SupplierRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});