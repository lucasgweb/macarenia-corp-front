import axios, { AxiosInstance } from 'axios';

const baseURL: string = 'http://localhost:3000/persons';

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});