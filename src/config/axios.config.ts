import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://med-vqa-backend.vercel.app`,
})

export default axiosInstance