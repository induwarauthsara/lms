import axios from "axios";

const lmsAPIhostDev = "https://librarymanagementsystembackend.herokuapp.com";
const lmsAPIhostPod = "http://localhost:3001";
const lmsAPIhost =
    process.env.NODE_ENV === "development" ? lmsAPIhostDev : lmsAPIhostPod;
const instance = axios.create({
    baseURL: lmsAPIhost,
});

export default instance;