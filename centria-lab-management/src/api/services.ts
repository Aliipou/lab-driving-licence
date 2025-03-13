import { apiClient } from './client';

// Auth services
export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/api/auth/login', { email, password });
    return response.data;
  },
  
  register: async (userData: any) => {
    const response = await apiClient.post('/api/auth/register', userData);
    return response.data;
  },
  
  logout: async () => {
    localStorage.removeItem('auth_token');
    return true;
  },
  
  getCurrentUser: async () => {
    const response = await apiClient.get('/api/auth/me');
    return response.data;
  }
};

// User services
export const userService = {
  getProfile: async () => {
    const response = await apiClient.get('/api/users/profile');
    return response.data;
  },
  
  updateProfile: async (profileData: any) => {
    const response = await apiClient.put('/api/users/profile', profileData);
    return response.data;
  }
};

// Safety guideline services
export const safetyService = {
  getGuidelines: async () => {
    const response = await apiClient.get('/api/safety/guidelines');
    return response.data;
  },
  
  acknowledgeGuideline: async (guidelineId: string) => {
    const response = await apiClient.post(`/api/safety/guidelines/${guidelineId}/acknowledge`);
    return response.data;
  }
};

// Testing services
export const testingService = {
  getAvailableTests: async () => {
    const response = await apiClient.get('/api/tests/available');
    return response.data;
  },
  
  getCompletedTests: async () => {
    const response = await apiClient.get('/api/tests/completed');
    return response.data;
  },
  
  startTest: async (testId: string) => {
    const response = await apiClient.post(`/api/tests/${testId}/start`);
    return response.data;
  },
  
  submitTest: async (testId: string, answers: any) => {
    const response = await apiClient.post(`/api/tests/${testId}/submit`, { answers });
    return response.data;
  }
};
