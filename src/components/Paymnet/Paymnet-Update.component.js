import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Navbar from "../../components/navbar.component"
export default class EditPaymnet extends Component {
    constructor(props) {
        super(props);


        this.onChangeCname = this.onChangeCname.bind(this);
        this.onChangeCID = this.onChangeCID.bind(this);
        this.onChangeBID = this.onChangeBID.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeItemCode = this.onChangeItemCode.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Cname: "",
            CID: "",
            BID:"",
            Date: "",
            ItemCode: "",
            Qty: "",
            Price: "",
            Paymnet: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Paymnet/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Cname: response.data.Cname,
                    CID: response.data.CID,
                    BID: response.data.BID,
                    Date: response.data.Date,
                    ItemCode: response.data.ItemCode,
                    Qty: response.data.Qty,
                    Price: response.data.Price,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Paymnet/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Paymnet: response.data.map(Paymnet => Paymnet.Name),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the Cname

   onChangeCname(e) {
    this.setState({
        Cname: e.target.value,
    });
}

//set the CID

onChangeCID(e) {
    this.setState({
        CID: e.target.value,
    });
}

//set BID
onChangeBID(e) {
    this.setState({
        BID: e.target.value,
    });
}

//set Date




onChangeDate(e) {
    this.setState({
        Date: e.target.value,
    });
}

//set ItemCode
onChangeItemCode(e) {
    this.setState({
        ItemCode: e.target.value,
    });
}

//set Qty
onChangeQty(e) {
    this.setState({
        Qty: e.target.value,
    });
}

//set Price
onChangePrice(e) {
    this.setState({
        Price: e.target.value,
    });
}



    onSubmit(e) {
        e.preventDefault();

        const {CID,BID,ItemCode} = this.state;


            const Paymnet = {
                Cname: this.state.Cname,
                CID: this.state.CID,
                BID: this.state.BID,
                Date: this.state.Date,
                ItemCode: this.state.ItemCode,
                Qty: this.state.Qty,
                Price: this.state.Price,
               
            };
            console.log(Paymnet);
            if (CID.length < 4) {
                swal("Customer ID invalid !", "Customer ID should be greater than 4", "error");
            } else if(BID.length < 4) {
                swal("Bill ID invalid !", "Bill ID should be greater than 4", "error");
            } else if(ItemCode.length < 4) {
                swal("Item Code invalid !", "Item Code should be greater than 4", "error");
            }else {

            axios
                .post('http://localhost:5000/Paymnet/update/' + this.props.match.params.id, Paymnet)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Paymnet/"));
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
            <font face = "Comic sans MS" size = "6" > Update Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >

            
            <div className = "form-group" >
           
            <label >Customer Name: </label> 
           
            <input type = "text"
            placeholder = " Customer Name"
            required  className = "form-control"
            value = { this.state.Cname }
            onChange = { this.onChangeCname }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Customer ID: </label> 
            <input type = "text"
            placeholder = "Customer ID"
            required  className = "form-control"
            value = { this.state.CID }
            onChange = { this.onChangeCID }/>
             </div > 

             <div className = "form-group" >
            <label > Bill ID: </label> 
            <input type = "text"
            placeholder = "Bill ID"
            required  className = "form-control"
            value = { this.state.BID }
            onChange = { this.onChangeBID }/>
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
            <label > Item Code: </label> 
            <input type = "text"
            placeholder = "Item Code"
            required  className = "form-control"
            value = { this.state.ItemCode }
            onChange = { this.onChangeItemCode }/>
             </div >

             <div className = "form-group" >
            <label > Quantity: </label> 
            <input type = "Number"
            placeholder = "Qty"
            required  className = "form-control"
            value = { this.state.Qty }
            onChange = { this.onChangeQty }/>
             </div >

             <div className = "form-group" >
            <label > Price: </label> 
            <input type = "Number"
            placeholder = "Qty"
            required  className = "form-control"
            value = { this.state.Price }
            onChange = { this.onChangePrice }/>
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