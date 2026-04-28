// Authentication utility functions
export const auth = {
  // Get stored token
  getToken: () => localStorage.getItem('token'),

  // Get stored user data
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  },

  // Login user (store token and user data)
  login: (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  // Logout user (clear all auth data)
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get authorization header for API requests
  getAuthHeader: () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
};