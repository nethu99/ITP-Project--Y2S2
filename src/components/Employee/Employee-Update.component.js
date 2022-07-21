import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

import Navbar from "../../components/navbar.component"

export default class EditEmployee extends Component {
    constructor(props) {
        super(props);


        this.onChangeEid = this.onChangeEid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Eid: "",
            Name: "",
            Department: "",
            Address: "",
            Number: "",
            Email: "",
            Gender:"",
            DOB: "",

            Employee: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Employee/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Eid: response.data.Eid,
                    Name: response.data.Name,
                    Department: response.data.Department,
                    Address: response.data.Address,
                    Number: response.data.Number,
                    Email: response.data.Email,
                    Gender: response.data.Gender,
                    DOB: response.data.DOB,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Employee: response.data.map(Employee => Employee.Name),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the Eid

   onChangeEid(e) {
    this.setState({
        Eid: e.target.value,
    });
}

//set the Name

onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}



//set Department



onChangeDepartment(e) {
    this.setState({
        Department: e.target.value,
    });
}


//set Address
onChangeAddress(e) {
    this.setState({
        Address: e.target.value,
    });
}


  //set the Number

  onChangeNumber(e) {
    this.setState({
        Number: e.target.value,
    });
}

//set the Email

onChangeEmail(e) {
    this.setState({
        Email: e.target.value,
    });
}

//set Gender
onChangeGender(e) {
    this.setState({
        Gender: e.target.value,
    });
}

//set DOB



onChangeDOB(e) {
    this.setState({
        DOB: e.target.value,
    });
}






    onSubmit(e) {
        e.preventDefault();

        const { Eid,Number} = this.state;

        

            const Employee = {
                Eid: this.state.Eid,
                Name: this.state.Name,
                Department: this.state.Department,
                Address: this.state.Address,
                Number: this.state.Number,
                Email: this.state.Email,
                Gender: this.state.Gender,
                DOB: this.state.DOB,
            };

            console.log(Employee);
            console.log(Employee);
            const cup = /^[0-9\b]+$/;
            if (Eid.length < 4) {
                swal("Employee ID invalid !", "Employee ID should be greater than 4", "error");
            } else if((!cup.test(String(Number))) || (Number.length != 10)) {
                swal("Invalid Contact Number !", "contact number should be valide pattern", "error");

            }else {

            axios
                .post('http://localhost:5000/Employee/update/' + this.props.match.params.id, Employee)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Employee/"));
            });
        }
    }

    

    render() {
        return (<div  >
              <Navbar/>
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://c.tenor.com/Fu4Q2ffZII0AAAAS/conference-teacher.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Employee  </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Employee ID: </label> 
            <input type = "text"
            placeholder = "Employee ID"
            required className = "form-control"
            value = { this.state.Eid }
            onChange = { this.onChangeEid }/> 
            </div>


            <div className = "form-group" >
          <label > Employee Name: </label> 
          <input type = "text"
          placeholder = "Employee ID"
          required className = "form-control"
          value = { this.state.Name }
          onChange = { this.onChangeName }/> 
          </div>


            <div className = "form-group" >
            <label > Department: </label> 
            <input type = "text"
            placeholder = "Department"
            required  className = "form-control"
            value = { this.state.Department }
            onChange = { this.onChangeDepartment }/>
             </div > 
            
            
            <div className = "form-group" >
            <label > Address: </label> 
            <input type = "text"
            placeholder = "Address"
            required  className = "form-control"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/>
             </div > 
             

             <div className = "form-group" >
            <label > Number: </label> 
            <input type = "text"
            placeholder = "Number"
            required  className = "form-control"
            value = { this.state.Number }
            onChange = { this.onChangeNumber}/>
             </div > 

            

             <div className = "form-group" >
            <label > Email: </label> 
            <input type = "Email"
            placeholder = "Email"
            required  className = "form-control"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>
             </div > 

             <div className = "form-group" >
            <label > Level: </label> 
            <input type = "text"
            placeholder = "Level"
            required  className = "form-control"
            value = { this.state.Level }
            onChange = { this.onChangeLevel }/>
             </div > 

             <div className = "form-group" >
            <label > Gender: </label> <select ref = "Rateinput"
            placeholder = "Gender"
            required className = "form-control"
            value = { this.state.Gender }
            onChange = { this.onChangeGender } >
            <option value = "Male" > Male </option>
            <option value = "Female" > Female </option> 
            
            </select >  </div>

             <div className = "form-group" >
            <label > Date Of Birth: </label> 
            <input type = "date"
            placeholder = "DOB"
            required  className = "form-control"
            value = { this.state.DOB }
            onChange = { this.onChangeDOB}/>
             </div > 

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}