import axios from "axios";

const http = axios.create({
    baseURL: "https://api.magicthegathering.io/v1",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;