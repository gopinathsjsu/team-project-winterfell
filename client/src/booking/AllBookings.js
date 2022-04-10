import {useState} from "react";
import RegisterForm from "../components/AddHotelForm";
import React from 'react';
import Table from "../components/Table"

import axios from "axios";
import {toast} from "react-toastify";
import {addhotel} from "../actions/admin";
import ConnectNav from "../components/ConnectNav";
import BookingNav from "../components/BookingNav";
import {Link} from "react-router-dom";

// let config = {
//     headers: {
//         authorization:  JSON.parse(localStorage.getItem('auth')).result.token
//     }
// }

// const listItems;

export default class AllBookings extends React.Component {
    state = {
        bookings: []
    }

    // export const addhotel = async (hotel) =>
    //     await axios.post(`${process.env.REACT_APP_API}/addHotel`, hotel, config);

    componentDidMount() {
        axios.post(`${process.env.REACT_APP_API}/getAllBookings`, {
            headers: {
                authorization:  JSON.parse(localStorage.getItem('auth')).result.token
            }
        })
            .then(res => {
                const bookings = res.data.bookings;

                console.log(bookings);
                this.setState({bookings});
            })
        console.log(this.state.bookings);
    }



    // const listItems = this.state.hotels.map((hotels) => <li>{hotels}</li>);

    render() {
        return (
            <>
                <div className="container-fluid bg-secondary p-5">
                    <ConnectNav/>
                </div>


                <div className="container-fluid p-4">
                    <BookingNav/>
                </div>

                {/*<div>*/}
                {/*    <Table data={this.state.hotels}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <ul>*/}
                {/*        {*/}
                {/*            this.state.hotels.map(hotel =>*/}
                {/*                <li key={hotel.hotelNumber}>*/}
                {/*                    {hotel.hotelName}*/}
                {/*                </li>)*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*</div>*/}

                <div>
                    <center>
                        <table>
                            <tr>
                                {/*<div className="form-group mb-3">*/}
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Booking#</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">User Id</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Hotel Id</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Room Id</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Start Date</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">End Date</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Guests#</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Amount</label>
                                    </th>
                                    <th style={{width: '100px'}}>
                                        <label className="form-label">Status</label>
                                    </th>


                                {/*</div>*/}
                            </tr>
                            {
                                this.state.bookings.map(booking =>
                                    <tr>
                                        <td style={{width: '100px'}} key={booking.bookingNumber}>
                                            {booking.bookingNumber}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.userId}>
                                            {booking.userId}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.hotelId}>
                                            {booking.hotelId}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.roomId}>
                                            {booking.roomId}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.startDate}>
                                            {(booking.startDate).split("T")[0]}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.endDate}>
                                            {(booking.endDate).split("T")[0]}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.guests}>
                                            {booking.guests}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.amount}>
                                            {booking.amount}
                                        </td>
                                        <td style={{width: '100px'}} key={booking.status}>
                                            {booking.status}
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
