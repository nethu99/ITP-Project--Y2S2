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

    deleteInvetory(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Invetory/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Invetory: this.state.Invetory.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Invetory/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Itemid.includes(searchKey)|| props.Itemid.includes(searchKey)
            );

            this.setState({ Invetory: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <Navbar/>
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Invetory Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by ID" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
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
            <th> Action </th > 
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
                    <td >
                    < Link to = { "/Invetory-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteInvetory(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Invetory-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Item  </button> </Link > </div> 
          
            <div style = {{ float: 'left' }} >
            <Link to = "/Invetory-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}