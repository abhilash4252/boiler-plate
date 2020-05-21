import axios from "axios";

const API = axios.create({
  baseURL: process.env.REST_API_LOCATION || "http://localhost:8080",
  responseType: "json",
});

export default API;
