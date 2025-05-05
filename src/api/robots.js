import axios from "axios";

const API_URL = "https://robotsfamososapi.onrender.com/api/robots";

export const getAllRobots = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getRobotById = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


export const createRobot = async (robotData, token) => {
    const response = await axios.post({API_URL}, robotData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

export const deleteRobot = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateRobot = async (id, updatedData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const filterByOrigen = async (origen, token) => {
  const response = await axios.get(`${API_URL}/filter/origen?origen=${encodeURIComponent(origen)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const filterByBando = async (bando, token) => {
  const response = await axios.get(`${API_URL}/filter/bando?bando=${encodeURIComponent(bando)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};