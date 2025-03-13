import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../api/services';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AppContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        localStorage.removeItem('auth_token');
      } finally {
        setLoading(false);
      }
    };
    
    initializeAuth();
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem('auth_token', response.token);
      setUser(response.user);
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  const logout = async () => {
    await authService.logout();
    setUser(null);
  };
  
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };
  
  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser
  };
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
