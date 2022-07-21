import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditDelivery extends Component {
    constructor(props) {
        super(props);


        this.onChangeVID = this.onChangeVID.bind(this);
        this.onChangeRNO = this.onChangeRNO.bind(this);
        this.onChangeCat = this.onChangeCat.bind(this);
        this.onChangeFType = this.onChangeFType.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            VID: "",
            RNO: "",
            Cat:"",
            FType: "",
            Capacity: "",
            Description: "",
            Date: "",
            Delivery: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Delivery/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    VID: response.data.VID,
                    RNO: response.data.RNO,
                    Cat: response.data.Cat,
                    FType: response.data.FType,
                    Capacity: response.data.Capacity,
                    Date: response.data.Date,
                    Description: response.data.Description,
                    
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Delivery/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Delivery: response.data.map(Delivery => Delivery.VID),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the VID

   onChangeVID(e) {
    this.setState({
        VID: e.target.value,
    });
}

//set the RNO

onChangeRNO(e) {
    this.setState({
        RNO: e.target.value,
    });
}

//set Cat
onChangeCat(e) {
    this.setState({
        Cat: e.target.value,
    });
}

//set FType




onChangeFType(e) {
    this.setState({
        FType: e.target.value,
    });
}

//set Capacity
onChangeCapacity(e) {
    this.setState({
        Capacity: e.target.value,
    });
}

//set Description
onChangeDescription(e) {
    this.setState({
        Description: e.target.value,
    });
}

//set Date
onChangeDate(e) {
    this.setState({
        Date: e.target.value,
    });
}








    onSubmit(e) {
        e.preventDefault();
        const {VID} = this.state;

       

            const Delivery = {
                VID: this.state.VID,
                RNO: this.state.RNO,
                Cat: this.state.Cat,
                FType: this.state.FType,
                Capacity: this.state.Capacity,
                Description: this.state.Description,
                Date: this.state.Date,
               
            };
            console.log(Delivery);
            if (VID.length < 4) {
                swal("Vehicle ID invalid !", "Vehicle ID should be greater than 4", "error");

            }else {

            axios
                .post('http://localhost:5000/Delivery/update/' + this.props.match.params.id, Delivery)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Delivery/"));
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
            <font face = "Comic sans MS" size = "6" > Update Delivery </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

            


            
            <div className = "form-group" >
           
            <label >Vehicle ID: </label> 
           
            <input type = "text"
            placeholder = "Vehicle ID"
            required  className = "form-control"
            value = { this.state.VID }
            onChange = { this.onChangeVID }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Reg NO: </label> 
            <input type = "text"
            placeholder = "Reg NO"
            required  className = "form-control"
            value = { this.state.RNO }
            onChange = { this.onChangeRNO }/>
             </div > 

             <div className = "form-group" >
            <label > Category: </label> 
            <select ref = "Category"
            placeholder = "Category"
            required className = "form-control"
            value = { this.state.Cat }
            onChange = { this.onChangeCat } >
            <option value = "Bike" > Bike </option> 
            <option value = "Car  " > Car  </option>
            <option value = "Van" > Van </option> 
            <option value = "Lorry " > Lorry </option>
            </select > </div>

            
            <div className = "form-group" >
            <label >  Fuel Type: </label> 
            <select ref = " Fuel Type"
            placeholder = " Fuel Type"
            required className = "form-control"
            value = { this.state.FType }
            onChange = { this.onChangeFType } >
            <option value = "Petrol" > Petrol </option> 
            <option value = "Deisel  " > Deisel  </option>
            </select > </div>


             <div className = "form-group" >
            <label > Capacity: </label> 
            <input type = "number"
            placeholder = "Capacity"
            required  className = "form-control"
            value = { this.state.Capacity }
            onChange = { this.onChangeCapacity }/>
             </div >

             <div className = "form-group" >
            <label > Description: </label> 
            <input type = "text"
            placeholder = "Description"
            required  className = "form-control"
            value = { this.state.Description }
            onChange = { this.onChangeDescription }/>
             </div >


             <div className = "form-group" >
            <label > Date: </label> 
            <input type = "Date"
            placeholder = "Date"
            required  className = "form-control"
            value = { this.state.Date }
            onChange = { this.onChangeDate }/>
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