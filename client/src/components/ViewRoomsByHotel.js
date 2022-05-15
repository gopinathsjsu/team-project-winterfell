
import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import axios from "axios";
import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from './UserDashboardNav';
import {Redirect, Link} from "react-router-dom";

let searchResult=false;


export default class ViewRoomsByHotel extends React.Component {
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
          hotelNumber: "",
          roomNumber:"",
          hotelNumber:"",
          roomBasePrice:"",
          type:"",
          typeCharge:"",
          currentPrice:"",
          description:"",
          startDate:"",
          endDate:"",
          breakfast: false,
          fitness: false,
          swimming: false,
          parking: false,
          meals: false,
          price:null,

        };
       this.state.roomNumber=props.location.state.roomNumber;
       this.state.hotelNumber=props.location.state.hotelNumber;
       this.state.roomBasePrice=props.location.state.roomBasePrice;
       this.state.type=props.location.state.type;
       this.state.typeCharge=props.location.state.typeCharge;
       this.state.currentPrice=props.location.state.currentPrice;
       this.state.description=props.location.state.description;
       this.state.startDate=props.location.state.startDate;
       this.state.endDate=props.location.state.endDate;
      }

     onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

      onSubmit = (e) => {
        e.preventDefault();
        let data = {
            breakfast: this.state.breakfast,
            fitness: this.state.fitness,
            swimming: this.state.swimming,
            parking: this.state.parking,
            meals: this.state.meals,
            guests: this.state.guests,
            roomNumber: this.state.roomNumber,
            hotelNumber: this.state.hotelNumber,
            startDate: this.state.startDate,
            endDate: this.state.endDate
          };

          console.log(data);

          //calculate final price & redirect to final review
           axios.post(`${process.env.REACT_APP_API}/calculatePrice`, data, {
            headers: {
                authorization: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).result.token: ""
            }
        }).then((response) => {
            if (response.data) {
                this.setState({
                  message: "ok",
                  price: response.data.price,
                });
               
               
            }
          });              
      };

      handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }



    render() {
      let redirectVar=null;

      if (this.state.message === "ok") {
        redirectVar =  <Redirect to={
          {
          pathname: '/finalreview',
          state: { price: this.state.price,
                   bookingNumber: '12345',
                   userId: JSON.parse(localStorage.getItem('auth')).result.userId,
                   hotelNumber:this.state.hotelNumber,
                   roomNumber:this.state.roomNumber,
                   startDate:this.state.startDate,
                   endDate:this.state.endDate,
                   guests: this.state.guests,
                   status: 'Success',
                   
                   breakfast: this.state.breakfast,
            fitness: this.state.fitness,
            swimming: this.state.swimming,
            parking: this.state.parking,
            meals: this.state.meals,
        }
      }
    } />
      } else if (this.state.message === "notok") {
        alert("Something went wrong.");
      }

        return (
          
            <>
            {redirectVar}
                <div className="container-fluid bg-secondary p-5">
                <ConnectNav/>
                </div>

                <div className="container-fluid p-4">
                <UserDashboardNav />
                </div>
                
               
                
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Room Details</Card.Title>
                  <Card.Text>
                    Room Number : {this.state.roomNumber}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Start Date: {this.state.startDate}</ListGroupItem>
                  <ListGroupItem>End Date: {this.state.endDate}</ListGroupItem>
                  <ListGroupItem>Base Price: ${this.state.roomBasePrice} </ListGroupItem>
                  <ListGroupItem>Room Type: {this.state.type}</ListGroupItem>
                  <ListGroupItem>Type Charge: ${this.state.typeCharge}</ListGroupItem>
                  <ListGroupItem>Current Price: ${this.state.currentPrice}</ListGroupItem>
                  <ListGroupItem>Description: {this.state.description}</ListGroupItem>
                </ListGroup>
                </Card>

                <form onSubmit={this.onSubmit}>
                <div style={{display:'flex', flexDirection:'column'}} >
                
                <label>Daily Continental Breakfast</label>

                <input
                type="checkbox"
                id="breakfast"
                name="breakfast"
                placeholder='breakfast'
                onChange={this.handleInputChange}
                checked={this.state.breakfast}
                />

                <label>Access to fitness room</label>

                <input
                type="checkbox"
                id="fitness"
                name="fitness"
                placeholder='fitness'
                onChange={this.handleInputChange}
                checked={this.state.fitness}
                />

                 <label>Access to Swimming Pool/Jacuzzi</label>

                  <input
                  type="checkbox"
                  id="swimming"
                  name="swimming"
                  placeholder='swimming'
                  onChange={this.handleInputChange}
                  checked={this.state.swimming}
                  />

                <label>Daily Parking</label>

                <input
                type="checkbox"
                id="parking"
                name="parking"
                placeholder='parking'
                onChange={this.handleInputChange}
                checked={this.state.parking}
                />

                <label>All meals included (Breakfast, Lunch, Dinner)</label>

                 <input
                 type="checkbox"
                 id="meals"
                 name="meals"
                 placeholder='meals'
                 onChange={this.handleInputChange}
                 checked={this.state.meals}
                 />

              <div>
              <label> Number of Guests</label>
              <select name='guests'
                  onChange={this.onChange}
                  value={this.state.fields["guests"]}
                  required>        
                <option value='1'>
                1
                </option>
                <option value='2'>
                2
                </option>
                <option value='3'>
                3
                </option> 
              </select>
              </div>

              <div className="registerButton">
              <Button type="submit">
                Book Room
              </Button>
              </div>

              </div>

              </form>

            </>
        )
    }
}