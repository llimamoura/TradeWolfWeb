import axios from "axios"

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_COINSTATS_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": import.meta.env.VITE_COINSTATS_API_KEY,
    },
});

