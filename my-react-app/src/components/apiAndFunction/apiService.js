// apiService.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed, like authorization tokens
  },
});

// GET request
export const getData = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
};

// POST request
export const postData = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
};

// PUT request
export const putData = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Error in PUT request:', error);
    throw error;
  }
};

// DELETE request
export const deleteData = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error in DELETE request:', error);
    throw error;
  }
};
