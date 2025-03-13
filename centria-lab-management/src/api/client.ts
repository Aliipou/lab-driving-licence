import axios from 'axios';

// Base API URL
const API_URL = 'https://openlabdlapi.linkpc.net/';

// Create axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiry
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // If the error is 401 and we haven't attempted a retry
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Redirect to login or refresh token logic here
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
        return apiClient(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    
    return Promise.reject(error);
  }
);
