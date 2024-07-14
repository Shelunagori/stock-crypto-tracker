import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BASE_URL_COINGECKO,
  headers: {
    'Content-Type': 'application/json',
    'x_cg_demo_api_key' : process.env.COINGECKO_API_KEY
  }
});

export default apiClient;
