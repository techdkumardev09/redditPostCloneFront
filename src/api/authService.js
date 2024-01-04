// api/authService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8082/api';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (credentials) => {
  try {
    const response = await api.post('users/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
