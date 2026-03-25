import axios from 'axios';
const options = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const axiosWithAuth = axios.create(options);
export const axiosClassic = axios.create(options);

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    return Promise.reject(error);
  },
);
