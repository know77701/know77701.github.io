import axios from "axios";

const BASB_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASB_URL,
});
export const userRequest = axios.create({
  baseURL: BASB_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
