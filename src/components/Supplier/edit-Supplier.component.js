import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditSupplier extends Component {
    constructor(props) {
        super(props);


        this.onChangeSID = this.onChangeSID.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeTP = this.onChangeTP.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            SID: "",
            Fname: "",
            LName:"",
            Address: "",
            NIC: "",
            TP: "",
            Supplier: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Supplier/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    SID: response.data.SID,
                    Fname: response.data.Fname,
                    LName: response.data.LName,
                    Address: response.data.Address,
                    NIC: response.data.NIC,
                    TP: response.data.TP,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Supplier/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Supplier: response.data.map(Supplier => Supplier.SID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the SID

   onChangeSID(e) {
    this.setState({
        SID: e.target.value,
    });
}

//set the Fname

onChangeFname(e) {
    this.setState({
        Fname: e.target.value,
    });
}

//set LName
onChangeLName(e) {
    this.setState({
        LName: e.target.value,
    });
}

//set Address




onChangeAddress(e) {
    this.setState({
        Address: e.target.value,
    });
}

//set NIC
onChangeNIC(e) {
    this.setState({
        NIC: e.target.value,
    });
}

//set TP
onChangeTP(e) {
    this.setState({
        TP: e.target.value,
    });
}








    onSubmit(e) {
        e.preventDefault();
        const { Eid,Number} = this.state;

       

            const Supplier = {
                SID: this.state.SID,
                Fname: this.state.Fname,
                LName: this.state.LName,
                Address: this.state.Address,
                NIC: this.state.NIC,
                TP: this.state.TP,
               
            };
            console.log(Supplier);
            const cup = /^[0-9\b]+$/;
            if (Eid.length < 4) {
                swal("Employee ID invalid !", "Employee ID should be greater than 4", "error");
            } else if((!cup.test(String(Number))) || (Number.length != 10)) {
                swal("Invalid Contact Number !", "contact number should be valide pattern", "error");

            }else {

            axios
                .post('http://localhost:5000/Supplier/update/' + this.props.match.params.id, Supplier)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Supplier/"));
            });
        }
        }

    

    render() {
        return (<div  >
             <Navbar/>
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="https://media.baamboozle.com/uploads/images/50597/1618856704_36162_gif-url.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Supplier </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

            

           


            
            <div className = "form-group" >
           
            <label >Supplier ID: </label> 
           
            <input type = "text"
            placeholder = " Supplier ID"
            required  className = "form-control"
            value = { this.state.SID }
            onChange = { this.onChangeSID }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Frist Name: </label> 
            <input type = "text"
            placeholder = "Frist Name"
            required  className = "form-control"
            value = { this.state.Fname }
            onChange = { this.onChangeFname }/>
             </div > 

             <div className = "form-group" >
            <label > Last Name: </label> 
            <input type = "text"
            placeholder = "Last Name"
            required  className = "form-control"
            value = { this.state.LName }
            onChange = { this.onChangeLName }/>
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
            <label > NIC: </label> 
            <input type = "text"
            placeholder = "NIC"
            required  className = "form-control"
            value = { this.state.NIC }
            onChange = { this.onChangeNIC }/>
             </div >

             <div className = "form-group" >
            <label > TP: </label> 
            <input type = "text"
            placeholder = "TP"
            required  className = "form-control"
            value = { this.state.TP }
            onChange = { this.onChangeTP }/>
             </div >

            

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update "
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}