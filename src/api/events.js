import axios from 'axios';

const API_URL = "https://robotsfamososapi.onrender.com/api/events";

// Crear un evento
export const createEvent = async (eventData, token) => {
  const response = await axios.post(API_URL, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Obtener un evento por su ID
export const getEventById = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Actualizar un evento
export const updateEvent = async (id, updatedData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Eliminar un evento
export const deleteEvent = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// ✅ Filtrar eventos por robot
export const filterByRobot = async (robotId, token) => {
  const response = await axios.get(`${API_URL}/robot/${robotId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};