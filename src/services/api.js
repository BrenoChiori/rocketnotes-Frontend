import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-backendapi-0484.onrender.com"
})
