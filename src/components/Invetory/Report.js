import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Invetory = (props) => ( 
    <tr>
    <td > { props.Invetory.Itemid } </td> 
    <td> {props.Invetory.Name} </td > { " " } 
    <td > { props.Invetory.Brand } </td>{" "}
    <td > { props.Invetory.qty } </td> 
    <td > { props.Invetory.Supplier } </td> 
    <td > { props.Invetory.PPrice } </td> 
    <td > { props.Invetory.Gender } </td> 
    <td > { props.Invetory.SPrice } </td> 
    <td > { props.Invetory.TProfit } </td> 

    <td >
    <Link to = { "/Invetory/" + props.Invetory._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteInvetory(props.Invetory._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class InvetoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Invetory: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Invetory/")
            .then((response) => {
                this.setState({ Invetory: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Invetory/")
            .then((response) => {
                this.setState({ Invetory: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    InvetoryList() {
        return this.state.Invetory.map((currentInvetory) => {
            return ( <
                Invetory Invetory = { currentInvetory }
                deleteInvetory = { this.deleteInvetory }
                key = { currentInvetory._id }
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
            <h3 > All Invetory Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Item ID </th> 
            <th>  Item name </th >
             < th > Item Brand </th> 
            <th > Qty </th> 
             <th> Supplier </th>
             <th > Purchased Date </th> 
             <th> Purchased date</th>
            <th> Selling Price </th >
            <th> Total Profit </th >  

            </tr> </thead > 
            <tbody >  {
                 this.state.Invetory.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Itemid } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Brand } </td>
                     <td > { props.qty } </td> 
                     <td > { props.Supplier } </td> 
                     <td > { props.PDate } </td> 
                     <td > { props.PPrice } </td> 
                     <td > { props.SPrice } </td> 
                     <td > { props.TProfit } </td> 
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