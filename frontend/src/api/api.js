import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance;