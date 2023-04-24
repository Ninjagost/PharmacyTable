import axios from 'axios';
import { BASE_URL } from '../utils/url';

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

request.interceptors.request.use((config) => {
  return config;
});
