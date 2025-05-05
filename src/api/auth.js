import axios from "axios";

const API_URL = "https://robotsfamososapi.onrender.com/api/auth";

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const registerUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/register`, credentials);
  return response.data;
};
