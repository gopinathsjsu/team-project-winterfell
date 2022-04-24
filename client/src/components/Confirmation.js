
import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import axios from "axios";
import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from './UserDashboardNav';
import {Redirect, Link} from "react-router-dom";


let searchResult=false;


export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          errors: {},
          message: "",
          isSafe: false,
          hotels: [],
          rooms: [],
          result: [],
          // hotelNumber: "",
          // roomNumber:"",
          // hotelNumber:"",
          roomBasePrice:"",
          type:"",
          typeCharge:"",
          currentPrice:"",
          description:"",
          // startDate:"",
          // endDate:"",
          friend: false,
          price: "",
          bookingNumber: null,
          userId:"",
          hotelNumber:"",
          roomNumber:"",
          startDate:"",
          endDate:"",
          guests:"",
          status:""
        
        
        };
       console.log(props.location.state)
  
      }
      componentDidMount() {
        searchResult=false;
        let data={
            amount: this.props.location.state.amount,
            bookingNumber: this.props.location.state.bookingNumber,
            userId: this.props.location.state.userId,
            hotelId:this.props.location.state.hotelId,
            roomId:this.props.location.state.roomId,
            startDate:this.props.location.state.startDate,
            endDate:this.props.location.state.endDate,
            guests: this.props.location.state.guests,
            status: this.props.location.state.status,
            price: '6789'
        };
        axios.post(`${process.env.REACT_APP_API}/addBooking`,data, {
          headers: {
              authorization: JSON.parse(localStorage.getItem('auth')).result.token
          }
      })
            .then(res => {
                const hotels = res.data.hotels;
                this.setState({hotels});
            })
    }



    render() {
      
        return (
          
            <>
           
                <div className="container-fluid bg-secondary p-5">
                <ConnectNav/>
                </div>

                <div className="container-fluid p-4">
                <UserDashboardNav />
                </div>
                
               <form>
                   <div style={{textAlign:'center'}}>
                   <h4>Booking Confirmed!
                   </h4>
                   <h5>
                       The following are the booking details:
                   </h5>

                   <p>
                   
                       Booking Number: {this.props.location.state.bookingNumber} <br></br>
                       User ID: {this.props.location.state.userId}<br></br>
                       Hotel Number:{this.props.location.state.hotelId}<br></br>
                       Room Number:{this.props.location.state.roomId}<br></br>
                       Start Date:{this.props.location.state.startDate}<br></br>
                       End Date:{this.props.location.state.endDate}<br></br>
                       Number of Guests: {this.props.location.state.guests}<br></br>
                       Status: {this.props.location.state.status}<br></br>
                       Amount Paid: {this.props.location.state.amount}<br></br>


                   </p>
                   </div>
                </form>
            </>
        )
    }
}