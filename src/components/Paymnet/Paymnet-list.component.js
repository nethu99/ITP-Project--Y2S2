import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

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

    deletePaymnet(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Paymnet/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Paymnet: this.state.Paymnet.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Paymnet/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Cname.includes(searchKey)|| props.Cname.includes(searchKey)
            );

            this.setState({ Paymnet: result });
        });
    };

   

    render() {
        return ( 
            <div >
            <Navbar/>
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Payment Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by Name" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
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
            <th> Action </th > 
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
                    <td >
                    < Link to = { "/Paymnet-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deletePaymnet(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Paymnet-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Payment  </button> </Link > </div> 
          
            <div style = {{ float: 'left' }} >
            <Link to = "/Paymnet-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}