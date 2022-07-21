import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Sales = (props) => ( 
    <tr>
    <td > { props.Sales.Sid } </td> 
    <td> {props.Sales.Name} </td > { " " } 
    <td > { props.Sales.Phone } </td>{" "}
    <td > { props.Sales.birthday } </td> 
    <td > { props.Sales.Address } </td> 
    <td > { props.Sales.Email } </td> 
    <td > { props.Sales.Gender } </td> 

    
     </tr>
);

export default class SalesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Sales: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Sales/")
            .then((response) => {
                this.setState({ Sales: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Sales/")
            .then((response) => {
                this.setState({ Sales: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    SalesList() {
        return this.state.Sales.map((currentSales) => {
            return ( <
                Sales Sales = { currentSales }
                deleteSales = { this.deleteSales }
                key = { currentSales._id }
                />
            );
        });
    }


    myfunction(){
   
        window.print();
       }

    

    render() {
        return ( 
            <div className = "container" >
            
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Sales Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Invoice Bill No </th> 
            <th>  Company ID </th >
             < th > Item Name </th> 
            <th > Item ID </th> 
             <th> Qty </th>
             <th > Category </th> 
             <th> Price </th>
            <th> Payment Method </th >  
            <th> Date </th > 

            </tr> </thead > 
            <tbody >  {
                this.state.Sales.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.IBillNO } </td> 
                    <td> {props.CID} </td > 
                    <td > { props.ItemName } </td>
                    <td > { props.ItemID } </td>
                     <td > { props.Itemqty } </td> 
                     <td > { props.Cat } </td> 
                     <td > { props.Price } </td> 
                     <td > { props.PMethod } </td> 
                     <td > { props.Date } </td> 
                    </ tr >))}  </tbody> </table > 
                     <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
            </div >
        );
    }
}