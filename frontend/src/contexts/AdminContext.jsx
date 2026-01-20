import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminAPI, setToken as saveToken, removeToken } from '../services/api';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyAdmin();
  }, []);

  const verifyAdmin = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      if (token) {
        const response = await adminAPI.verify();
        setAdmin(response.data);
      }
    } catch (error) {
      localStorage.removeItem('admin_token');
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const response = await adminAPI.login(credentials);
    saveToken(response.data.access_token);
    setAdmin({ username: response.data.username });
    return response.data;
  };

  const logout = () => {
    removeToken();
    setAdmin(null);
  };

  return (
    <AdminContext.Provider value={{ admin, loading, login, logout, isAuthenticated: !!admin }}>
      {children}
    </AdminContext.Provider>
  );
};