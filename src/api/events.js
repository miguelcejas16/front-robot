import axios from 'axios';

const API_URL = "http://localhost:3000/api/events";

export const createEvent = async (eventData, token) => {
  const response = await axios.post(API_URL, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export const getEventById = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export const updateEvent = async (id, updatedData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
    return response.data;
}

export const deleteEvent = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export const filterByRobot = async (robotId, token) => {
  const response = await axios.get(`${API_URL}/robot?robotId=${encodeURIComponent(robotId)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

