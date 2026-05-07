import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // "Bearer " prefix OLMADAN gönder — API böyle istiyor
    config.headers.Authorization = token;
  }
  return config;
});

export const axiosWithAuth = () => api;