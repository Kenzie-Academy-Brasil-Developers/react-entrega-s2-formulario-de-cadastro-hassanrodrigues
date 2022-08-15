import axios from "axios";
const baseUrl = "https://kenziehub.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export default api;
