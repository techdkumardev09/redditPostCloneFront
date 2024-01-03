// api/authService.js

import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com'; // Replace with your actual API base URL

export const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
