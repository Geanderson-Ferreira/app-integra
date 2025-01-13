import axios from "axios";

const api = axios.create({
  baseURL: "http://200.247.217.182:10824",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("INTEGRATOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
