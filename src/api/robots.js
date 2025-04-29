import axios from "axios";

const API_URL = "http://localhost:3000/api/robots";

export const getAllRobots = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getRobotById = async (id, token) => {
  const response = await axios.get(`http://localhost:3000/api/robots/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


export const createRobot = async (robotData, token) => {
    const response = await axios.post("http://localhost:3000/api/robots", robotData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

export const deleteRobot = async (id, token) => {
  const response = await axios.delete(`http://localhost:3000/api/robots/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateRobot = async (id, updatedData, token) => {
  const response = await axios.put(`http://localhost:3000/api/robots/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const filterByOrigen = async (origen, token) => {
  const response = await axios.get(`http://localhost:3000/api/robots/filter/origen?origen=${encodeURIComponent(origen)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const filterByBando = async (bando, token) => {
  const response = await axios.get(`http://localhost:3000/api/robots/filter/bando?bando=${encodeURIComponent(bando)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};