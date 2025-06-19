/**
 * API Service for Login Screen UI
 * This file demonstrates how to implement actual API calls based on the api-integration.json file
 * 
 * NOTE: This is a sample implementation and is not used in the current app.
 * To use this, you would need to replace the mock login in LoginScreen.js with these functions.
 */

// Import the API configuration
import apiConfig from './api-integration.json';

/**
 * Login API call
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Promise resolving to user data or error
 */
export const loginUser = async (email, password) => {
  const { endpoint, method, headers } = apiConfig.api.login;
  
  try {
    const response = await fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify({
        email,
        password
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    // Store auth token for future requests
    // await AsyncStorage.setItem('authToken', data.token);
    
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Example of how to use the login function in a component
 * 
 * import { loginUser } from './api-service';
 * 
 * // Inside your component:
 * const handleLogin = async () => {
 *   setLoading(true);
 *   try {
 *     const userData = await loginUser(email, password);
 *     setLoading(false);
 *     navigation.navigate('LoggedIn', { email: userData.user.email });
 *   } catch (error) {
 *     setLoading(false);
 *     Alert.alert('Login Failed', error.message);
 *   }
 * };
 */

/**
 * Register user API call
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User's name
 * @returns {Promise} - Promise resolving to registration result or error
 */
export const registerUser = async (email, password, name) => {
  const { endpoint, method, headers } = apiConfig.api.register;
  
  try {
    const response = await fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify({
        email,
        password,
        name
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

/**
 * Request password reset API call
 * @param {string} email - User email
 * @returns {Promise} - Promise resolving to reset result or error
 */
export const resetPassword = async (email) => {
  const { endpoint, method, headers } = apiConfig.api.resetPassword;
  
  try {
    const response = await fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify({
        email
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Password reset failed');
    }
    
    return data;
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};
