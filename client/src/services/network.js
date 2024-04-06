import axios from "axios";
import { API_BASE } from "../config";

export const API = axios.create({
  baseURL: API_BASE,
});

export function setAuthHeader() {
  API.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers.Authorization = localStorage.getItem("usertoken");
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Credentials"] = "true";
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}
