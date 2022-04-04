import axios from "axios";

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/signup`, user);

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/signin`, user);
