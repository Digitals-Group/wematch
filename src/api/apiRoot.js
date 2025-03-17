import axios from "axios";

const apiRoot = axios.create({
    baseURL: "https://vacansy-production.up.railway.app",
    timeout: 10000,
})

export { apiRoot }