import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const Employee = (props) => ( 
    <tr>
    <td > { props.Employee.Eid } </td> 
    <td> {props.Employee.Name} </td > { " " } 
    <td > { props.Employee.Department } </td> 
    <td> {props.Employee.Address} </td > { " " } 
    <td > { props.Employee.Number } </td>{" "}
    <td> {props.Employee.Email} </td > { " " } 
    <td > { props.Employee.Gender } </td>{" "}
    <td> {props.Employee.DOB} </td > { " " } 

     </tr>
);

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Employee: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Employee/")
            .then((response) => {
                this.setState({ Employee: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Employee/")
            .then((response) => {
                this.setState({ Employee: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

  

    EmployeeList() {
        return this.state.Employee.map((currentEmployee) => {
            return ( <
                Employee Employee = { currentEmployee }
                deleteEmployee = { this.deleteEmployee }
                key = { currentEmployee._id }
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
            <h3 > All Employee  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Employee ID </th> 
            <th>  Name </th > 
            <th > Department </th> 
             <th> Address </th>
             <th > Number </th> 
            <th>  Email </th > 
            < th > Gender </th> 
            <th > Date Of Birth </th> 
          
            </tr> </thead > 
            <tbody >  {
                this.state.Employee.map((props) => ( 
                    <tr key = { props.Lid }>
                    <td> {props.Eid} </td > 
                    <td > { props.Name } </td>
                    <td> {props.Department} </td > 
                    <td > { props.Address } </td>
                    <td> {props.Number} </td > 
                    <td > { props.Email } </td>
                    <td> {props.Gender} </td > 
                    <td > { props.DOB } </td>
                    
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