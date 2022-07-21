import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const Customer = (props) => ( 
    <tr>
    <td > { props.Customer.NIC } </td> 
    <td> {props.Customer.Name} </td > { " " } 
    <td > { props.Customer.Phone } </td>{" "}
    <td > { props.Customer.Address } </td> 
    <td > { props.Customer.Email } </td> 

    
     </tr>
);

export default class CustomerList extends Component {
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

  

    myfunction(){
   
        window.print();
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


  

   

    render() {
        return ( 
            <div className = "container" >
           
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Customer Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Customer NIC </th> 
            <th>  Name </th >
             < th > Email </th> 
            <th > Phone </th> 
             <th>Address </th>
            
             
             

            </tr> </thead > 
            <tbody >  {
                this.state.Customer.map((props) => ( 
                    <tr key = { props.NIC }>
                    <td > { props.NIC } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Email } </td>
                     <td > { props.Phone } </td>   
                     <td > { props.Address } </td> 
                     
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