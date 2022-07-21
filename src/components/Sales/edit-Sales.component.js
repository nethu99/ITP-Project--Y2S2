import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditSales extends Component {
    constructor(props) {
        super(props);


        this.onChangeIBillNO = this.onChangeIBillNO.bind(this);
        this.onChangeCID = this.onChangeCID.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemID = this.onChangeItemID.bind(this);
        this.onChangeItemqty = this.onChangeItemqty.bind(this);
        this.onChangeCat = this.onChangeCat.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePMethod= this.onChangePMethod.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            IBillNO: "",
            CID: "",
            ItemName:"",
            ItemID: "",
            Itemqty: "",
            Price: "",
            Cat: "",
            PMethod: "",
            Date: "",
            Sales: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Sales/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    IBillNO: response.data.IBillNO,
                    CID: response.data.CID,
                    Semester: response.data.Semester,
                    ItemName: response.data.ItemName,
                    ItemID: response.data.ItemID,
                    Itemqty: response.data.Itemqty,
                    Cat: response.data.Cat,
                    Price: response.data.Price,
                    PMethod: response.data.PMethod,
                    Date: response.data.Date,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Sales/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Sales: response.data.map(Sales => Sales.IBillNO),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the IBillNO

   onChangeIBillNO(e) {
    this.setState({
        IBillNO: e.target.value,
    });
}

//set the CID

onChangeCID(e) {
    this.setState({
        CID: e.target.value,
    });
}

//set ItemName
onChangeItemName(e) {
    this.setState({
        ItemName: e.target.value,
    });
}

//set ItemID




onChangeItemID(e) {
    this.setState({
        ItemID: e.target.value,
    });
}

//set Itemqty
onChangeItemqty(e) {
    this.setState({
        Itemqty: e.target.value,
    });
}

//set Cat
onChangeCat(e) {
    this.setState({
        Cat: e.target.value,
    });
}

//set Price
onChangePrice(e) {
    this.setState({
        Price: e.target.value,
    });
}

//set PMethod
onChangePMethod(e) {
    this.setState({
        PMethod: e.target.value,
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

        const { CID} = this.state;

            const Sales = {
                IBillNO: this.state.IBillNO,
                CID: this.state.CID,
                ItemName: this.state.ItemName,
                ItemID: this.state.ItemID,
                Itemqty: this.state.Itemqty,
                Cat: this.state.Cat,
                Price: this.state.Price,
                PMethod: this.state.PMethod,
                Date: this.state.Date,
               
            };
            console.log(Sales);

            if (CID.length < 4) {
                swal("Company ID invalid !", "Company ID should be greater than 4", "error");
            } else {

            axios
                .post('http://localhost:5000/Sales/update/' + this.props.match.params.id, Sales)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Sales/"));
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
            <font face = "Comic sans MS" size = "6" > Update Sales </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

            

           


            
            <div className = "form-group" >
           
            <label >Invoice Bill No: </label> 
           
            <input type = "text"
            placeholder = " Invoice Bill No"
            required  className = "form-control"
            value = { this.state.IBillNO }
            onChange = { this.onChangeIBillNO }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Company ID: </label> 
            <input type = "text"
            placeholder = "Company ID"
            required  className = "form-control"
            value = { this.state.CID }
            onChange = { this.onChangeCID }/>
             </div > 

             <div className = "form-group" >
            <label > Item Name: </label> 
            <input type = "text"
            placeholder = "Item Name"
            required  className = "form-control"
            value = { this.state.ItemName }
            onChange = { this.onChangeItemName }/>
             </div >

             <div className = "form-group" >
            <label >Item ID: </label> 
            <input type = "text"
            placeholder = "Item ID"
            required  className = "form-control"
            value = { this.state.ItemID }
            onChange = { this.onChangeItemID }/>
             </div >


             <div className = "form-group" >
            <label > Item qty: </label> 
            <input type = "Number"
            placeholder = "Item qty"
            required  className = "form-control"
            value = { this.state.Itemqty }
            onChange = { this.onChangeItemqty }/>
             </div >

             <div className = "form-group" >
            <label >Category : </label> <select ref = "Rateinput"
            placeholder = "Category "
            required className = "form-control"
            value = { this.state.Cat }
            onChange = { this.onChangeCat } >
            <option value = "Original " > Original  </option>
            <option value = "Non- original" > Non- original </option> 
            <option value = "Air filter" > Air filter </option>
            <option value = "Spark Plugs" > Spark Plugs </option>
            <option value = "Battry" > Battry </option>
            <option value = "Ac Filters" > Ac Filters </option>
            
            </select >  </div>

            <div className = "form-group" >
           <label > Price: </label> 
           <input type = "number"
           placeholder = "Price"
           required  className = "form-control"
           value = { this.state.Price }
           onChange = { this.onChangePrice }/>
            </div >

           

            <div className = "form-group" >
            <label > Payment Method: </label> <select ref = "Rateinput"
            placeholder = "Payment Method"
            required className = "form-control"
            value = { this.state.PMethod }
            onChange = { this.onChangePMethod } >
            <option value = "Viza" > Viza </option>
            <option value = "Mastercard" > Mastercard </option> 
            <option value = "Paypal" > Paypal </option>
            <option value = "Other" > Other </option>
            
            </select >  </div>

             <div className = "form-group" >
            <label > Date: </label> 
            <input type = "Date"
            placeholder = "Date"
            required  className = "form-control"
            value = { this.state.Date }
            onChange = { this.onChangeDate}/>
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