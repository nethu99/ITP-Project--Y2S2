import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Supplier = (props) => ( 
    <tr>
    <td > { props.Supplier.SID } </td> 
    <td> {props.Supplier.Fname} </td > { " " } 
    <td > { props.Supplier.LName } </td>{" "}
    <td > { props.Supplier.Address } </td> 
    <td > { props.Supplier.NIC } </td> 
    <td > { props.Supplier.TP } </td> 

    <td >
    <Link to = { "/Supplier/" + props.Supplier._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteSupplier(props.Supplier._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SupplierList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Supplier: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Supplier/")
            .then((response) => {
                this.setState({ Supplier: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteSupplier(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Supplier/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Supplier: this.state.Supplier.filter((el) => el._id !== id),
            });
        }
    }

    SupplierList() {
        return this.state.Supplier.map((currentSupplier) => {
            return ( <
                Supplier Supplier = { currentSupplier }
                deleteSupplier = { this.deleteSupplier }
                key = { currentSupplier._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Supplier/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.SID.includes(searchKey)|| props.SID.includes(searchKey)
            );

            this.setState({ Supplier: result });
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
            <h3 > All Supplier Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by ID" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Supplier ID </th> 
            <th>  Frist Name </th >
             < th > Last Name </th> 
            <th > Address </th> 
             <th > Nic </th> 
             <th> TP </th>
            <th> Action </th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Supplier.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.SID } </td> 
                    <td> {props.Fname} </td > 
                    <td > { props.LName } </td>
                     <td > { props.Address } </td> 
                     <td > { props.NIC } </td> 
                     <td > { props.TP } </td> 
                    <td >
                    < Link to = { "/Supplier-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteSupplier(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Supplier-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Supplier  </button> </Link > </div> 
          
            <div style = {{ float: 'left' }} >
            <Link to = "/Supplier-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}