import {useState} from "react";
import RegisterForm from "../components/AddHotelForm";
import React from 'react';
import Table from "../components/Table"

import axios from "axios";
import {toast} from "react-toastify";
import {addhotel} from "../actions/admin";
import ConnectNav from "../components/ConnectNav";
import AdminRoomNav from "../components/AdminRoomNav";
import {Link} from "react-router-dom";

// let config = {
//     headers: {
//         authorization:  JSON.parse(localStorage.getItem('auth')).result.token
//     }
// }

// const listItems;

export default class AllRooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            message: "",
            isSafe: false,
            hotels: [],
            rooms: [],
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

    onClick = (e) => {
        e.preventDefault();
        // console.log(this.state.hotelNumber);
        let data = {
            hotelNumber: this.state.hotelNumber,
        };

        // console.log(data);

        axios.post(`${process.env.REACT_APP_API}/getRoomFromHotel`, data, {
            headers: {
                authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
            }
        }).then((response) => {
            console.log(response.data.rooms);
            if (response.data) {

                this.setState({
                    rooms: response.data.rooms,
                });
                console.log("response \n"+this.state.hotel.hotelNumber);
            }
        });

    };

    // export const addhotel = async (hotel) =>
    //     await axios.post(`${process.env.REACT_APP_API}/addHotel`, hotel, config);

    componentDidMount() {
        axios.post(`${process.env.REACT_APP_API}/getAllHotels`, {
            headers: {
                authorization:  JSON.parse(localStorage.getItem('auth')).result.token
            }
        })
            .then(res => {
                const hotels = res.data.hotels;

                console.log(hotels);
                this.setState({hotels});
            })
        console.log(this.state.hotels);
    }



    // const listItems = this.state.hotels.map((hotels) => <li>{hotels}</li>);

    render() {
        return (
            <>
                <div className="container-fluid bg-secondary p-5">
                    <ConnectNav/>
                </div>


                <div className="container-fluid p-4">
                    <AdminRoomNav/>
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
                <br></br>
                <div>
                    <center>
                        <table>
                            <tr>
                                {/*<div className="form-group mb-3">*/}
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">Hotel#</label>
                                    </th>
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">Room#</label>
                                    </th>
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">Type</label>
                                    </th>
                                    <th style={{width: '200px'}}>
                                        <label className="form-label">Description</label>
                                    </th>
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">Type Charge</label>
                                    </th>
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">Base Price</label>
                                    </th>
                                    <th style={{width: '150px'}}>
                                        <label className="form-label">current Price</label>
                                    </th>
                            </tr>
                            {
                                this.state.rooms.map(room =>
                                    <tr>
                                        <td style={{width: '150px'}} key={room.hotelNumber}>
                                            {room.hotelNumber}
                                        </td>
                                        <td style={{width: '150px'}} key={room.roomNumber}>
                                            {room.roomNumber}
                                        </td>
                                        <td style={{width: '150px'}} key={room.type}>
                                            {room.type}
                                        </td>
                                        <td style={{width: '200px'}} key={room.description}>
                                            {room.description}
                                        </td>
                                        <td style={{width: '150px'}} key={room.typeCharge}>
                                            {room.typeCharge}
                                        </td>
                                        <td style={{width: '150px'}} key={room.roomBasePrice}>
                                            {room.roomBasePrice}
                                        </td>
                                        <td style={{width: '150px'}} key={room.currentPrice}>
                                            {room.currentPrice}
                                        </td>
                                    </tr>)
                            }

                        </table>
                    </center>
                </div>


            </>
        )
    }
}
