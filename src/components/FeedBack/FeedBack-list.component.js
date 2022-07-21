import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"

const FeedBack = (props) => ( 
    <tr>
    <td > { props.FeedBack.FID } </td> 
    <td> {props.FeedBack.Cname} </td > { " " } 
    <td > { props.FeedBack.ItemName } </td> 
    <td> {props.FeedBack.Description} </td > { " " } 
    <td > { props.FeedBack.Rating } </td>{" "}
    <td> {props.FeedBack.Date} </td > { " " }
   
    
    <td >
    <Link to = { "/FeedBack/" + props.FeedBack._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteFeedBack(props.FeedBack._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class FeedBackList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FeedBack: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/FeedBack/")
            .then((response) => {
                this.setState({ FeedBack: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/FeedBack/")
            .then((response) => {
                this.setState({ FeedBack: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteFeedBack(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/FeedBack/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                FeedBack: this.state.FeedBack.filter((el) => el._id !== id),
            });
        }
    }

    FeedBackList() {
        return this.state.FeedBack.map((currentFeedBack) => {
            return ( <
                FeedBack FeedBack = { currentFeedBack }
                deleteFeedBack = { this.deleteFeedBack }
                key = { currentFeedBack._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/FeedBack/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.FID.includes(searchKey)|| props.FID.includes(searchKey)
            );

            this.setState({ FeedBack: result });
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
            <h3 > All FeedBack  </h3>
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
            <th > FeedBack ID </th> 
            <th> Customer Name </th > 
            <th > Item Name </th> 
             <th> Description </th>
             <th > Rating </th> 
            <th>  Date </th > 
           <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.FeedBack.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.FID } </td> 
                    <td> {props.Cname} </td > 
                    <td > { props.ItemName } </td>
                    <td> {props.Description} </td > 
                    <td > { props.Rating } </td>
                    <td> {props.Date} </td > 
                    
                    <td >
                    < Link to = { "/FeedBack-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteFeedBack(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/FeedBack-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New FeedBack  </button> </Link > </div> 

            <div style = {{ float: 'left' }} >
            <Link to = "/FeedBack-report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>


            </div >
        );
    }
}