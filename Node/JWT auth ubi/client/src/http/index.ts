import axios from "axios";
import { AuthResponse } from "../models/responce/AuthResponse";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  // @ts-ignore
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originRequest._isRetry = true;
      try {
        const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", res.data.accessToken);
        return $api.request(originRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  }
);

export default $api;
