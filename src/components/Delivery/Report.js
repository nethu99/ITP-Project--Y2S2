import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Delivery = (props) => ( 
    <tr>
    <td > { props.Delivery.VID } </td> 
    <td> {props.Delivery.RNO} </td > { " " } 
    <td > { props.Delivery.Cat } </td>{" "}
    <td > { props.Delivery.FType } </td> 
    <td > { props.Delivery.Capacity } </td> 
    <td > { props.Delivery.Description } </td> 
    <td > { props.Delivery.Date } </td> 

    <td >
    <Link to = { "/Delivery/" + props.Delivery._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteDelivery(props.Delivery._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class DeliveryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Delivery: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Delivery/")
            .then((response) => {
                this.setState({ Delivery: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    DeliveryList() {
        return this.state.Delivery.map((currentDelivery) => {
            return ( <
                Delivery Delivery = { currentDelivery }
                deleteDelivery = { this.deleteDelivery }
                key = { currentDelivery._id }
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
            <h3 > All Delivery Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Vehicle ID </th> 
            <th>  Reg NO </th >
             < th > Category </th> 
            <th > Fuel Type </th> 
             <th> Capacity </th>
             <th >  Description </th> 
             <th> Date </th>

            </tr> </thead > 
            <tbody >  {
                this.state.Delivery.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.VID } </td> 
                    <td> {props.RNO} </td > 
                    <td > { props.Cat } </td>
                     <td > { props.FType } </td> 
                     <td > { props.Capacity } </td> 
                     <td > { props.Description } </td> 
                     <td > { props.Date } </td> 
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