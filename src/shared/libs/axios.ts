import axios, { AxiosInstance } from 'axios';

const baseURL: string = 'http://127.0.0.1:3000';

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});