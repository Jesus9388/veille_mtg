import axios from "axios";

const http = axios.create({
    baseURL: "https://api.scryfall.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;