import React, {useState} from 'react';

import axios from "axios";
import ProfileNav from "../components/ProfileNav";
import ConnectNav from "../components/ConnectNav";
import {Button} from "antd";
import RegisterForm from "../components/AddHotelForm";
import {toast} from "react-toastify";



let searchResult=false;

export default class MyProfile extends React.Component {





  constructor(props) {
    super(props);
    // props.addExperience(data, history);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      isSafe: false,
      hotels: [],
      profile: {}
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
      userName: this.state.userName?this.state.userName:JSON.parse(localStorage.getItem('auth')).result.userName,
      email: this.state.email,
      mobileNumber: this.state.mobileNumber,
      type: this.state.type,
      profileImage: this.state.profileImage
    };

    // console.log(data);

    axios.post(`${process.env.REACT_APP_API}/updateProfile`, data, {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    }).then((response) => {

      console.log(response.data);
      if (response.data) {
        this.setState({
          profile: response.data
        });
        // window.localStorage.setItem("auth", JSON.stringify(response.data));
        toast.success("Profile Updated Successfully");
        // history.push("/user/profile");
        console.log("updated ");
        // this.render();

      }
    });
    // history.push("/user/profile");
  };

  componentDidMount() {
    let data = {
      userName: JSON.parse(localStorage.getItem('auth')).result.userName
    }
    axios.post(`${process.env.REACT_APP_API}/getProfile`, data,  {
      headers: {
        authorization: localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).result.token
      }
    })
        .then(res => {
          this.setState({
            profile: res.data.profile
          });
        })
    console.log(this.state.profile.type);
  }


  render() {

    console.log(this.props);

    return (
        <>
          <div className="container-fluid bg-secondary p-5">
            <ConnectNav />
          </div>


          <div className="container-fluid p-4">
            <ProfileNav />
          </div>


          <form onSubmit={this.onSubmit} className="mt-3">
            <center>
            <table >
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Name</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name='userName'
                        type="text"
                        className="form-control"
                        placeholder="Enter Profile Name"
                        defaultValue={this.state.profile.userName}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Email</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name='email'
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        defaultValue={this.state.profile.email}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Contact Number</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "mobileNumber"
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        defaultValue={this.state.profile.mobileNumber}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Profile Type</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "type"
                        type="text"
                        className="form-control"
                        placeholder="Enter Profile Type"
                        defaultValue={this.state.profile.type}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                    <label className="form-label">Profile Image</label>
                  </td>
                  <td style={{width: `400px`}}>
                    <input
                        name = "profileImage"
                        type="text"
                        className="form-control"
                        placeholder="Enter Profile Image Link"
                        defaultValue={this.state.profile.profileImage}
                        // defaultValue={(this.state.profile.profileImage)?
                        //     (this.state.profile.profileImage):"Enter Profile Image Link"}
                        onChange={this.onChange}
                    />
                  </td>
                </div>
              </tr>



            </table>


            <button className="btn btn-primary">
              Update
            </button>
            </center>
          </form>



        </>
    )
  }
}