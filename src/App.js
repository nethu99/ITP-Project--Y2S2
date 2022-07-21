import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import main from "./components/main.component";



//Paymnet
import EditPaymnet from "./components/Paymnet/Paymnet-Update.component";
import CreatePaymnet from "./components/Paymnet/Paymnet-Create.component";
import PaymnetList from "./components/Paymnet/Paymnet-list.component";
import Paymneteport from "./components/Paymnet/Report";

//Employee

import EditEmployee from "./components/Employee/Employee-Update.component";
import CreateEmployee from "./components/Employee/Employee-Create.component";
import EmployeeList from "./components/Employee/Employee-list.component";
import Employeereport from "./components/Employee/Report";


//FeedBack

import EditFeedBack from "./components/FeedBack/FeedBack-Update.component";
import CreateFeedBack from "./components/FeedBack/FeedBack-Create.component";
import FeedBackList from "./components/FeedBack/FeedBack-list.component";
import FeedBackreport from "./components/FeedBack/Report";

//Customer

import EditCustomer from "./components/Customer/edit-Customer.component";
import CreateCustomer from "./components/Customer/create-Customer.component";
import CustomerList from "./components/Customer/Customer-list.component";
import Customerreport from "./components/Customer/Report";
//Delivery

import EditDelivery from "./components/Delivery/edit-Delivery.component";
import CreateDelivery from "./components/Delivery/create-Delivery.component";
import DeliveryList from "./components/Delivery/Delivery-list.component";
import Deliveryreport from "./components/Delivery/Report";


//Invetory

import EditInvetory from "./components/Invetory/edit-Invetory.component";
import CreateInvetory from "./components/Invetory/create-Invetory.component";
import InvetoryList from "./components/Invetory/Invetory-list.component";
import Invetoryreport from "./components/Invetory/Report";


//Sales

import EditSales from "./components/Sales/edit-Sales.component";
import CreateSales from "./components/Sales/create-Sales.component";
import SalesList from "./components/Sales/Sales-list.component";
import Salesreport from "./components/Sales/Report";

//Supplier

import EditSupplier from "./components/Supplier/edit-Supplier.component";
import CreateSupplier from "./components/Supplier/create-Supplier.component";
import SupplierList from "./components/Supplier/Supplier-list.component";
import Supplierreport from "./components/Supplier/Report";

function App() {

    return (<Router >
        <div className = "container"  >
       
        <br/>
       
        <Route path = "/" exact component = { main}/>

        <Route path = "/Paymnet-add/" component = { CreatePaymnet }/>
        <Route path = "/Paymnet/" component = { PaymnetList }/> 
        <Route path = "/Paymnet-Edit/:id" component = { EditPaymnet }/>
        <Route path = "/Paymnet-report/" component = { Paymneteport }/>

        <Route path = "/Employee-add/" component = { CreateEmployee }/>
        <Route path = "/Employee/" component = { EmployeeList }/> 
        <Route path = "/Employee-Edit/:id" component = { EditEmployee }/>
        <Route path = "/Employee-report/" component = { Employeereport }/>

        <Route path = "/FeedBack-add/" component = { CreateFeedBack }/>
        <Route path = "/FeedBack/" component = { FeedBackList }/> 
        <Route path = "/FeedBack-Edit/:id" component = { EditFeedBack }/>
        <Route path = "/FeedBack-report/" component = { FeedBackreport }/>

        <Route path = "/Customer-add/" component = { CreateCustomer }/>
        <Route path = "/Customer/" component = {CustomerList }/> 
        <Route path = "/Customer-Edit/:id" component = { EditCustomer }/>
        <Route path = "/Customer-Report/" component = { Customerreport }/>

        <Route path = "/Delivery-add/" component = { CreateDelivery }/>
        <Route path = "/Delivery/" component = { DeliveryList }/> 
        <Route path = "/Delivery-Edit/:id" component = { EditDelivery }/>
        <Route path = "/Delivery-report/" component = { Deliveryreport }/>

        <Route path = "/Invetory-add/" component = { CreateInvetory }/>
        <Route path = "/Invetory/" component = { InvetoryList }/> 
        <Route path = "/Invetory-Edit/:id" component = { EditInvetory }/>
        <Route path = "/Invetory-report/" component = { Invetoryreport }/>

        <Route path = "/Sales-add/" component = { CreateSales }/>
        <Route path = "/Sales/" component = { SalesList }/> 
        <Route path = "/Sales-Edit/:id" component = { EditSales }/>
        <Route path = "/Sales-report/" component = { Salesreport }/>

        <Route path = "/Supplier-add/" component = { CreateSupplier }/>
        <Route path = "/Supplier/" component = { SupplierList }/> 
        <Route path = "/Supplier-Edit/:id" component = { EditSupplier }/>
        <Route path = "/Supplier-report/" component = { Supplierreport }/>
          </div > </Router>
    );
}

export default App;