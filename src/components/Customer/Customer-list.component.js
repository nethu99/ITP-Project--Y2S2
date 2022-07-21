import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Customer = (props) => ( 
    <tr>
    <td > { props.Customer.NIC } </td> 
    <td> {props.Customer.Name} </td > { " " } 
    <td > { props.Customer.Phone } </td>{" "}
    <td > { props.Customer.Address } </td> 
    <td > { props.Customer.Email } </td> 

    <td >
    <Link to = { "/Customer/" + props.Customer._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteCustomer(props.Customer._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class CustomertList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Customer: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Customer/")
            .then((response) => {
                this.setState({ Customer: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Customer/")
            .then((response) => {
                this.setState({ Customer: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteCustomer(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Customer/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Customer: this.state.Customer.filter((el) => el._id !== id),
            });
        }
    }

    CustomerList() {
        return this.state.Customer.map((currentCustomer) => {
            return ( <
                Customer Customer = { currentCustomer }
                deleteCustomer = { this.deleteCustomer }
                key = { currentCustomer._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Customer/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Customer: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <Navbar/>
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Customer Details  </h3>
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
            <th > Customer ID </th>
            <th > Customer NIC </th> 
            <th>  Name </th >
             < th > Email </th> 
            <th > Phone </th> 
             <th>Address </th>
             <th> Action </th >
            </tr> </thead > 
            <tbody >  {
                this.state.Customer.map((props) => ( 
                    <tr key = { props.ID }>
                    <td > { props.CID } </td> 
                    <td > { props.NIC } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Email } </td>
                     <td > { props.Phone } </td>   
                     <td > { props.Address } </td> 
                     
                    <td >
                    < Link to = { "/Customer-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteCustomer(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Customer-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Customer  </button> </Link > </div> 
            
            <div style = {{ float: 'left' }} >
            <Link to = "/Customer-Report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}