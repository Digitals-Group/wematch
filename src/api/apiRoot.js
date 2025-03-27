import axios from "axios";

const apiRoot = axios.create({
  baseURL: "https://vacansy.onrender.com",
  timeout: 10000,
});

export { apiRoot };
