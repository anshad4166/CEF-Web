import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your actual API URL

export const fetchContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const fetchNewsletters = async () => {
  const response = await axios.get(`${API_URL}/newsletters`);
  return response.data;
};

export const updateContact = async (contactId, updatedData) => {
  const response = await axios.put(`${API_URL}/contacts/${contactId}`, updatedData);
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/events`, eventData);
  return response.data;
};

export const createNewsletter = async (newsletterData) => {
  const response = await axios.post(`${API_URL}/newsletters`, newsletterData);
  return response.data;
};