import React, {useState} from 'react';

import axios from "axios";
import AdminHotelNav from "../components/AdminHotelNav";
import ConnectNav from "../components/ConnectNav";
import {Button} from "antd";
import RegisterForm from "../components/AddHotelForm";
import {toast} from "react-toastify";

let searchResult=false;

export default class DeleteHotel extends React.Component {





  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      isSafe: false,
      hotels: [],
      hotel: {}
    };

  }


  onChange = (e) => {
    // console.log("in on change method");
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.hotelNumber);
    let data = {
      hotelName: this.state.hotel.hotelName
    };

    // console.log(data);

    axios.post(`${process.env.REACT_APP_API}/deleteHotel`, data, {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    }).then((response) => {

      console.log(response.data);
      if (response.data) {
        // searchResult=true;
        // // console.log(searchResult);
        // this.setState({
        //   hotel: response.data.hotel,
        // });
        toast.success("Hotel Deleted Successfully");
        console.log("deleted ");
      }
    });

  };

  onClick = (e) => {
    e.preventDefault();
    // console.log(this.state.hotelNumber);
    let data = {
      hotelNumber: this.state.hotelNumber,
    };

    // console.log(data);

    axios.post(`${process.env.REACT_APP_API}/getHotel`, data, {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    }).then((response) => {
      console.log(response.data.hotel);
      if (response.data) {
        searchResult=true;
        // console.log(searchResult);
        this.setState({
          hotel: response.data.hotel,
        });
        console.log("response \n"+this.state.hotel.hotelNumber);
      }
    });

  };

  componentDidMount() {
    axios.post(`${process.env.REACT_APP_API}/getAllHotels`, {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    })
        .then(res => {
          const hotels = res.data.hotels;
          console.log(hotels);
          this.setState({hotels});
        })
    console.log(this.state.hotels);
  }




  render() {

    console.log(this.props);

    return (
        <>
          <div className="container-fluid bg-secondary p-5">
            <ConnectNav />
          </div>


          <div className="container-fluid p-4">
            <AdminHotelNav />
          </div>

          <form onSubmit={this.onSubmit} className="mt-3">
            {/*<div style={{display:'flex', flexDirection:'row'}}>*/}

            <center>
              <table >
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '150px'}}>
                      <label className="form-label">Hotel Number</label>
                    </td>
                    <td style={{width: `150px`}}>
                      <select style={{width: `150px`}}
                          name='hotelNumber'
                          onChange={this.onChange}
                          value={this.state.fields["hotelNumber"]}
                          required>
                        <option value="please select" key="please select">
                          Please Select
                        </option>
                        {this.state.hotels.map((i) => {
                          return (
                              <option value={i.hotelNumber} key={i.hotelNumber}>
                                {i.hotelNumber}
                              </option>
                          );
                        })}
                      </select>
                    </td>
                    <td style={{width: '150px'}}>
                      <center><button  className="btn btn-primary" onClick={this.onClick}>
                        Show
                      </button></center>
                    </td>
                  </div>
                </tr>
              </table>
            </center>
          </form>

              {/*<div >*/}
              {/*  <Button type="submit" className="btn btn-primary">*/}
              {/*    Search*/}
              {/*  </Button>*/}
              {/*</div>*/}



            {/*</div>*/}


          {/*{(searchResult)? <p> True</p> : <p>False</p> }*/}


          <form onSubmit={this.onSubmit} className="mt-3">
            <center>
            <table >
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Number</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name='hotelNum'
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Number For Reference"
                        value={this.state.hotel.hotelNumber}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Name</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name='hotelName'
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Name"
                        value={this.state.hotel.hotelName}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Description</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "hotelDescription"
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Description"
                        value={this.state.hotel.hotelDescription}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Location</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "hotelLocation"
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Locationn"
                        value={this.state.hotel.hotelLocation}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Address</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "hotelAddress"
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Address"
                        value={this.state.hotel.hotelAddress}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Image Link</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "hotelImage"
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Image"
                        value={this.state.hotel.hotelImage}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Breakfast Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "breakfast"
                        type="text"
                        className="form-control"
                        placeholder="Enter Breakfast Charge"
                        value={this.state.hotel.breakfast}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Meal Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "meal"
                        type="text"
                        className="form-control"
                        placeholder="Enter Meal Charge"
                        value={this.state.hotel.meal}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Gym Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "gym"
                        type="text"
                        className="form-control"
                        placeholder="Enter Gym Charge"
                        value={this.state.hotel.gym}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Pool Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "pool"
                        type="text"
                        className="form-control"
                        placeholder="Enter Pool Charge"
                        value={this.state.hotel.pool}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Parking Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "parking"
                        type="text"
                        className="form-control"
                        placeholder="Enter Parking Charge"
                        value={this.state.hotel.parking}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Hotel Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "hotelCharge"
                        type="text"
                        className="form-control"
                        placeholder="Enter Hotel Charge"
                        value={this.state.hotel.hotelCharge}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Weekend Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "weekendCharge"
                        type="text"
                        className="form-control"
                        placeholder="Enter Weekend Charge"
                        value={this.state.hotel.weekendCharge}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Holiday Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "holidayCharge"
                        type="text"
                        className="form-control"
                        placeholder="Enter Holiday Charge"
                        value={this.state.hotel.holidayCharge}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Season Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "seasonCharge"
                        type="text"
                        className="form-control"
                        placeholder="Enter Season Charge"
                        value={this.state.hotel.seasonCharge}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Extra Guest Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "extraGuestCharge"
                        type="text"
                        className="form-control"
                        placeholder="Enter Extra Guest Charge"
                        value={this.state.hotel.extraGuestCharge}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>


            </table>


            <button className="btn btn-primary">
              Delete
            </button>
            </center>
          </form>



        </>
    )
  }
}