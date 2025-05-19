import axios from 'axios';
import { LoginCredentials, RegisterData, AuthResponse } from '../types/auth';

// In a real application, this would connect to your backend
// For demo purposes, we're using mock data
const API_URL = 'https://api.example.com';

// Mock user data for demonstration
const MOCK_USERS = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password',
    role: 'manager',
  },
];

/**
 * Login a user
 */
export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // In a real app, you would call your API here
  // const response = await axios.post(`${API_URL}/auth/login`, credentials);
  // return response.data;

  // For demo purposes, simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = MOCK_USERS.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        resolve({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token: 'mock-jwt-token',
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 500);
  });
};

/**
 * Register a new user
 */
export const registerUser = async (userData: RegisterData): Promise<AuthResponse> => {
  // In a real app, you would call your API here
  // const response = await axios.post(`${API_URL}/auth/register`, userData);
  // return response.data;

  // For demo purposes, simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = MOCK_USERS.find((u) => u.email === userData.email);

      if (existingUser) {
        reject(new Error('User with this email already exists'));
      } else {
        const newUser = {
          id: (MOCK_USERS.length + 1).toString(),
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role: userData.role,
        };

        // In a real app, you would save the user to the database
        MOCK_USERS.push(newUser);

        resolve({
          user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
          },
          token: 'mock-jwt-token',
        });
      }
    }, 500);
  });
};

/**
 * Log out the current user
 */
export const logoutUser = (): void => {
  // In a real app, you might need to call an API to invalidate the token
  // Here we just remove the token from localStorage
  localStorage.removeItem('token');
};

/**
 * Get the current user
 */
export const getCurrentUser = async () => {
  // In a real app, you would call your API here
  // const response = await axios.get(`${API_URL}/auth/me`, {
  //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  // });
  // return response.data;

  // For demo purposes, simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'manager',
      });
    }, 500);
  });
};

/**
 * Set up axios interceptors for authentication
 */
export const setupAuthInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Unauthorized, logout the user
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
};