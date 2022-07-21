import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const Paymnet = (props) => ( 
    <tr>
    <td > { props.Paymnet.Cname } </td> 
    <td> {props.Paymnet.CID} </td > { " " } 
    <td > { props.Paymnet.BID } </td>{" "}
    <td > { props.Paymnet.Date } </td> 
    <td > { props.Paymnet.ItemCode } </td> 
    <td > { props.Paymnet.Qty } </td> 
    <td > { props.Paymnet.Price } </td> 

    <td >
    <Link to = { "/Paymnet/" + props.Paymnet._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deletePaymnet(props.Paymnet._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class PaymnetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Paymnet: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Paymnet/")
            .then((response) => {
                this.setState({ Paymnet: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Paymnet/")
            .then((response) => {
                this.setState({ Paymnet: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

   

    PaymnetList() {
        return this.state.Paymnet.map((currentPaymnet) => {
            return ( <
                Paymnet Paymnet = { currentPaymnet }
                deletePaymnet = { this.deletePaymnet }
                key = { currentPaymnet._id }
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
            <h3 > All Payment Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Customer Nmae </th> 
            <th>  Customer ID </th >
             < th > Bill ID </th> 
            <th > Date </th> 
             <th> Item Code </th>
             <th > Qty </th> 
             <th> Price </th>
           

            </tr> </thead > 
            <tbody >  {
                this.state.Paymnet.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Cname } </td> 
                    <td> {props.CID} </td > 
                    <td > { props.BID } </td>
                     <td > { props.Date } </td> 
                     <td > { props.ItemCode } </td> 
                     <td > { props.Qty } </td> 
                     <td > { props.Price } </td> 
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