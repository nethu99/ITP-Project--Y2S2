import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const Sales = (props) => ( 
    <tr>
    <td > { props.Sales.Sid } </td> 
    <td> {props.Sales.Name} </td > { " " } 
    <td > { props.Sales.Phone } </td>{" "}
    <td > { props.Sales.birthday } </td> 
    <td > { props.Sales.Address } </td> 
    <td > { props.Sales.Email } </td> 
    <td > { props.Sales.Gender } </td> 

    <td >
    <Link to = { "/Sales/" + props.Sales._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteSales(props.Sales._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SalesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Sales: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Sales/")
            .then((response) => {
                this.setState({ Sales: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Sales/")
            .then((response) => {
                this.setState({ Sales: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteSales(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Sales/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Sales: this.state.Sales.filter((el) => el._id !== id),
            });
        }
    }

    SalesList() {
        return this.state.Sales.map((currentSales) => {
            return ( <
                Sales Sales = { currentSales }
                deleteSales = { this.deleteSales }
                key = { currentSales._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Sales/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.IBillNO.includes(searchKey)|| props.IBillNO.includes(searchKey)
            );

            this.setState({ Sales: result });
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
            <h3 > All Sales Details  </h3>
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
            <th > Invoice Bill No </th> 
            <th>  Company ID </th >
             < th > Item Name </th> 
            <th > Item ID </th> 
             <th> Qty </th>
             <th > Category </th> 
             <th> Price </th>
            <th> Payment Method </th >  
            <th> Date </th > 
            <th> Action </th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Sales.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.IBillNO } </td> 
                    <td> {props.CID} </td > 
                    <td > { props.ItemName } </td>
                    <td > { props.ItemID } </td>
                     <td > { props.Itemqty } </td> 
                     <td > { props.Cat } </td> 
                     <td > { props.Price } </td> 
                     <td > { props.PMethod } </td> 
                     <td > { props.Date } </td> 
                    <td >
                    < Link to = { "/Sales-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteSales(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Sales-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Sales  </button> </Link > </div> 
          
            <div style = {{ float: 'left' }} >
            <Link to = "/Sales-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            </div >
        );
    }
}