import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const FeedBack = (props) => ( 
    <tr>
    <td > { props.FeedBack.FID } </td> 
    <td> {props.FeedBack.Cname} </td > { " " } 
    <td > { props.FeedBack.ItemName } </td> 
    <td> {props.FeedBack.Description} </td > { " " } 
    <td > { props.FeedBack.Rating } </td>{" "}
    <td> {props.FeedBack.Date} </td > { " " }
    
   
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
            <h3 > All FeedBack  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              
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