
import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import axios from "axios";
import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from './UserDashboardNav';
import {Redirect, Link} from "react-router-dom";

let rewardError=false;

export default class FinalReview extends React.Component {
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
          // hotelNumber:"",
          // roomNumber:"",
          startDate:"",
          endDate:"",
          guests:"",
          status:"",
          rewardPoints:"",
          rewardInputValue:"",
        };
       console.log(props.location.state)  

      }

     onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    rewardError=false;

    let data={
      userId: JSON.parse(localStorage.getItem('auth')).result.userId,
  };
    axios.post(`${process.env.REACT_APP_API}/getProfile`, data, {
        headers: {
            authorization:  JSON.parse(localStorage.getItem('auth')).result.token
        }
    })
        .then((response) => {
          if (response.data) {
            rewardError=false;
            console.log(response.data);
              const rooms = response.data.profile.rewardPoints;
              this.setState({rooms});
              console.log(rooms);
          }
        }); 
}

    render() {
      let rewardError=false;

      let redirectVar=null;
 
     return (
          
            <>
            {redirectVar}
                <div className="container-fluid bg-secondary p-5">
                <ConnectNav/>
                </div>

                <div className="container-fluid p-4">
                <UserDashboardNav />
                </div>
                
               <form>
                  <div style={{marginLeft:'20px'}}>
                   <h4>The final estimated price is ${this.props.location.state.price}
                   </h4>
                


                   <h4>Current Reward Points: {this.state.rooms} </h4>
                   <div className="form-group">
                <label>Use Reward Points</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter"
                  name="usepoints"
                  onChange={this.onChange}
                  value={this.state.fields["usepoints"]}
                />
              </div>

                  
                  
                <p>Do you want to continue?</p>
                <div style={{display:'flex', flexDirection:'row'}} >
                <div style={{marginRight:'10px'}}>
                <Link to="/listHotelByLocation">
                  No    
                </Link>
                </div>
                <div>
                <Link to={{     
                pathname: "/payment", 
                state: {
                   amount: this.props.location.state.price,
                   bookingNumber: this.props.location.state.bookingNumber,
                   userId: this.props.location.state.userId,
                   hotelId:this.props.location.state.hotelNumber,
                   roomId:this.props.location.state.roomNumber,
                   startDate:this.props.location.state.startDate,
                   endDate:this.props.location.state.endDate,
                   guests: this.props.location.state.guests,
                   status: this.props.location.state.status,  
                   rewardPoints: this.state.usepoints,  
                   breakfast: this.props.location.state.breakfast,
            fitness: this.props.location.state.fitness,
            swimming: this.props.location.state.swimming,
            parking: this.props.location.state.parking,
            meals: this.props.location.state.meals,    
                }
                }}>
                Proceed to Payment
                </Link>
                </div>
                </div>
                </div>
                </form>
            </>
        )
    }
}