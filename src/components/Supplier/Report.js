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
            <h3 > All Supplier Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Supplier ID </th> 
            <th>  Frist Name </th >
             < th > Last Name </th> 
            <th > Address </th> 
             <th> Lecture Hourse </th>
             <th > Nic </th> 
             <th> TP </th> 

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