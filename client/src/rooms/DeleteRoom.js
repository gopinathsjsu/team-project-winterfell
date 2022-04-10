import React, {useState} from 'react';

import axios from "axios";
import AdminRoomNav from "../components/AdminRoomNav";
import ConnectNav from "../components/ConnectNav";
import {Button} from "antd";
import RegisterForm from "../components/AddHotelForm";
import {toast} from "react-toastify";

let searchResult=false;

export default class DeleteRoom extends React.Component {





  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      isSafe: false,
      hotels: [],
      rooms: [],
      room: {}
    };

  }


  onChange = (e) => {

    console.log("in on change method");
    console.log(this.state.hotelNumber);
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
          [e.target.name]: e.target.value,
        }, () => {

          console.log(this.state.hotelNumber);

          if(e.target.name == "hotelNumber" && this.state.hotelNumber != "please select"){
            let data = {
              hotelNumber: this.state.hotelNumber
            }
            axios.post(`${process.env.REACT_APP_API}/getRoomFromHotel`, data, {
              headers: {
                authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
              }
            }).then((response) => {
              console.log(response.data.rooms);
              if (response.data) {
                searchResult=true;
                // console.log(searchResult);
                this.setState({
                  rooms: response.data.rooms,
                });
                console.log("response \n"+this.state.hotel.hotelNumber);
              }
            });
          }
        }
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.hotelNumber);
    let data = {

      roomNumber: (this.state.roomNumber)?this.state.roomNumber:this.state.room.roomNumber,


    };

    // console.log(data);

    axios.post(`${process.env.REACT_APP_API}/deleteRoom`, data, {
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
        toast.success("Room Deleted Successfully");
        console.log("deleted ");
      }
    });

  };

  onClick = (e) => {
    e.preventDefault();
    // console.log(this.state.hotelNumber);
    let data = {
      roomNumber: this.state.roomNumber,
    };

    // console.log(data);

    axios.post(`${process.env.REACT_APP_API}/getRoom`, data, {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    }).then((response) => {
      console.log(response.data.room);
      if (response.data) {
        searchResult=true;
        // console.log(searchResult);
        this.setState({
          room: response.data.room,
        });
        console.log("response \n"+this.state.room.roomNumber);
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
            <AdminRoomNav />
          </div>

          <form  className="mt-3">
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
                          // value={this.state.fields["hotelNumber"]}
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
                    <td style={{width: '50px'}}>

                    </td>

                    <td style={{width: '150px'}}>
                      <label className="form-label">Room Number</label>
                    </td>
                    <td style={{width: `150px`}}>
                      <select style={{width: `150px`}}
                              name='roomNumber'
                              onChange={this.onChange}
                              value={this.state.fields["roomNumber"]}
                              required>
                        <option value="please select" key="please select">
                          Please Select
                        </option>
                        {this.state.rooms.map((i) => {
                          return (
                              <option value={i.roomNumber} key={i.roomNumber}>
                                {i.roomNumber}
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
                          value={this.state.room.hotelNumber}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Number</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name='roomNumber'
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Number"
                          value={this.state.room.roomNumber}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Type</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "type"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Type"
                          value={this.state.room.type}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Image</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "image"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Image Link"
                          value={this.state.room.image}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Description</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "description"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Description"
                          value={this.state.room.description}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Type Charge</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "typeCharge"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Type Charge"
                          value={this.state.room.typeCharge}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Base Price</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "roomBasePrice"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Base Price"
                          value={this.state.room.roomBasePrice}
                          onChange={this.onChange}
                      />
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="form-group mb-3">
                    <td style={{width: '250px'}}>
                      <label className="form-label">Room Current Price</label>
                    </td>
                    <td style={{width: `400px`}}>
                      <input
                          name = "currentPrice"
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Current Price"
                          value={this.state.room.currentPrice}
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