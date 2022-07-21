import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

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

    deleteEmployee(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Employee/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Employee: this.state.Employee.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Employee/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Employee: result });
        });
    };

    

    render() {
        return ( 
            <div className = "container" >
            <div  >
            <Navbar/>
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Employee  </h3>
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
            <th > Employee ID </th> 
            <th>  Name </th > 
            <th > Department </th> 
             <th> Address </th>
             <th > Number </th> 
            <th>  Email </th > 
            < th > Gender </th> 
            <th > Date Of Birth </th> 
           <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.Employee.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Eid } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Department } </td>
                    <td> {props.Address} </td > 
                    <td > { props.Number } </td>
                    <td> {props.Email} </td > 
                    <td > { props.Gender } </td>
                    <td> {props.DOB} </td >
                    
                    <td >
                    < Link to = { "/Employee-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteEmployee(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Employee-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Employee  </button> </Link > </div> 

            <div style = {{ float: 'left' }} >
            <Link to = "/Employee-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>


            </div >
        );
    }
}