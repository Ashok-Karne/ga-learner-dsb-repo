import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Get token from localStorage
const getToken = () => localStorage.getItem('admin_token');

// Set token in localStorage
export const setToken = (token) => localStorage.setItem('admin_token', token);

// Remove token from localStorage
export const removeToken = () => localStorage.removeItem('admin_token');

// Create axios instance with auth header
const apiClient = axios.create({
  baseURL: API,
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Admin API
export const adminAPI = {
  login: (credentials) => axios.post(`${API}/admin/login`, credentials),
  verify: () => apiClient.get('/admin/verify'),
};

// Products API
export const productsAPI = {
  getAll: (category) => axios.get(`${API}/products`, { params: { category } }),
  getOne: (id) => axios.get(`${API}/products/${id}`),
  create: (data) => apiClient.post('/products', data),
  update: (id, data) => apiClient.put(`/products/${id}`, data),
  delete: (id) => apiClient.delete(`/products/${id}`),
};

// Company Info API
export const companyAPI = {
  get: () => axios.get(`${API}/company-info`),
  update: (data) => apiClient.put('/company-info', data),
};

// Inquiries API
export const inquiriesAPI = {
  getAll: () => apiClient.get('/inquiries'),
  create: (data) => axios.post(`${API}/inquiries`, data),
  delete: (id) => apiClient.delete(`/inquiries/${id}`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => axios.get(`${API}/categories`),
  create: (data) => apiClient.post('/categories', data),
  update: (id, data) => apiClient.put(`/categories/${id}`, data),
  delete: (id) => apiClient.delete(`/categories/${id}`),
};

// Stats API
export const statsAPI = {
  get: () => apiClient.get('/stats'),
};

// Upload API
export const uploadAPI = {
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default apiClient;