import axios from "axios";

const lmsAPIhostPod = "http://api.lms.lk";
const lmsAPIhostDev = "http://localhost:3001";
const lmsAPIhost =
    process.env.NODE_ENV === "development" ? lmsAPIhostDev : lmsAPIhostPod;
//const lmsAPIhost = lmsAPIhostDev;
const instance = axios.create({
    baseUrl: lmsAPIhost,
});

export default instance;