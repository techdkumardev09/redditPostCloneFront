// api/authService.js

import axios from "axios";
import { toast } from "react-toastify";

// const BASE_URL = "https://techdkumardev0944.pythonanywhere.com/api";
const BASE_URL = "https://redditclonebackend.onrender.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

const headers = {
  "Content-Type": "application/json",
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/token/", credentials, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.detail);
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post("/register/", userData, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.detail);
  }
};
