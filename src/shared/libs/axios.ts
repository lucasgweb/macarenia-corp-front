import axios, { AxiosInstance } from 'axios';

const baseURL: string = 'https://macarenia-corp-backend.onrender.com';

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});