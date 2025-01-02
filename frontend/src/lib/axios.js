import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://reservation-app-9vvs.onrender.com/api",
});
