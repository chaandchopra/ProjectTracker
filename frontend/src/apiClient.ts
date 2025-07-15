import axios from 'axios';


const apiClient = axios.create({
  baseURL: process.env.API_BASE_URI || 'http://localhost:8000/api',
  headers: {
    'accept': 'application/json',
  },
});

export default apiClient;