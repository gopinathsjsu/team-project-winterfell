import axios from "axios";
import {useSelector} from "react-redux";
import ConnectNav from "../components/ConnectNav";

//const { auth } = localStorage.getItem('auth')? ;
console.log("in admin.js");
//console.log(JSON.parse(localStorage.getItem('auth')).result.token);
//console.log(localStorage.getItem('auth'));
console.log("here");

// let config = {
//     headers: {
//         authorization: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).result.token: ""
//     }
// }

export const addhotel = async (hotel) =>
  await axios.post(`${process.env.REACT_APP_API}/addHotel`, hotel, {
      headers: {
          authorization: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).result.token: ""
      }
  });

export const addroom = async (room) =>
    await axios.post(`${process.env.REACT_APP_API}/addRoom`, room, {
        headers: {
            authorization: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).result.token: ""
        }
    });

 export const login = async (user) =>
await axios.post(`${process.env.REACT_APP_API}/signin`, user);
