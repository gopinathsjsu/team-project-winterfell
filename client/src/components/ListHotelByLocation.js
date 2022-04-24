
import React from 'react';
import { Button} from "react-bootstrap";
import axios from "axios";
import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from './UserDashboardNav';
import {Link} from "react-router-dom";


// let config = {
//     headers: {
//         authorization: JSON.parse(localStorage.getItem('auth')).result.token
//     }
// }

let searchResult=false;

export default class ListHotelByLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          errors: {},
          message: "",
          isSafe: false,
          hotels: [],
          result: [],
        };


      
      }

    onChange = (e) => {
        console.log("in on change method");
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.hotelLocation);
        let data = {
            hotelLocation: this.state.hotelLocation,
          };

        

          axios.post(`${process.env.REACT_APP_API}/getHotelFromLocation`, data, {
              headers: {
                  authorization: JSON.parse(localStorage.getItem('auth')).result.token
              }
          }).then((response) => {

        //   axios.post(`${process.env.REACT_APP_API}/getHotelFromLocation`, data,  {
        //     headers: {
        //         authorization: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).result.token: ""
        //     }
        // }).then((response) => {

            if (response.data) {
                searchResult=true;
                const result = response.data.hotels;
                this.setState({result});
            }
          });
          
      };

    componentDidMount() {
        searchResult=false;
        axios.post(`${process.env.REACT_APP_API}/getAllHotels`, {
            headers: {
                authorization: JSON.parse(localStorage.getItem('auth')).result.token
            }
        }).then(res => {
                const hotels = res.data.hotels;
                this.setState({hotels});
            })
        console.log(this.state.hotels);
    }

    render() {
        console.log(this.state.result);
        return (
            <>
                <div className="container-fluid bg-secondary p-5">
                    <ConnectNav/>
                </div>

                <div className="container-fluid p-4">
        <UserDashboardNav />
      </div>
                
            <form onSubmit={this.onSubmit}>
                <div style={{display:'flex', flexDirection:'row'}}>
                
                <label id="label">Select Location</label>
          <select
            name='hotelLocation'
            onChange={this.onChange}
            value={this.state.fields["hotelLocation"]}
            required>
            {this.state.hotels.map((i) => {
              return (
                <option value={i.hotelLocation} key={i.hotelLocation}>
                  {i.hotelLocation}
                </option>
              );
            })}
           </select>  

           <div className="registerButton">
                <Button type="submit">
                  Search
                </Button>
              </div>
 
           </div>
           </form>

           {/* {(searchResult)?  this.state.result.map(hotel => <li key={hotel.hotelNumber}>{hotel.hotelName}</li>) : <p></p> } */}

           {(searchResult)?   <div className="App">
      <table>
        <tr>
          <th style={{width: '150px'}}>Hotel ID</th> <br></br>
          <th style={{width: '150px'}}>Hotel Name</th><br></br>
          <th style={{width: '150px'}}>Description</th><br></br>
          <th style={{width: '150px'}}>Location</th><br></br>
          <th style={{width: '150px'}}>Address</th><br></br>
          <th style={{width: '150px'}}>Image</th>
          <th style={{width: '150px'}}></th>
        </tr>
        {this.state.result.map((val, key) => {
          return (
            <tr key={val.hotelNumber}>
              <td style={{width: '150px'}}>{val.hotelNumber}</td><br></br>
              <td style={{width: '150px'}}>{val.hotelName}</td><br></br>
              <td style={{width: '150px'}}>{val.hotelDescription}</td><br></br>
              <td style={{width: '150px'}}>{val.hotelLocation}</td><br></br>
              <td style={{width: '150px'}}>{val.hotelAddress}</td><br></br>
              <td style={{width: '150px'}}>{val.hotelImage}</td>
              <td>
             
                <Link to={{ 
 pathname: "/selectbookingdates", 
 state: val.hotelLocation 
}}>
 Select Booking Dates
</Link>

              </td>
            </tr>
          )
        })}
      </table>
      
    </div> : <p></p> }
 
            </>
        )
    }
}