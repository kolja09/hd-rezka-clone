import axios from "axios";

const api = () => {
  const axiosInstance = axios.create({
    baseURL: "/JSON/",
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use((config) => {
    return config;
  });

  return axiosInstance;
};

export default api();
