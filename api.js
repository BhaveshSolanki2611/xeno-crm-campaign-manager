import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const addCustomer = (data) => api.post('/api/customers/add', data);
export const createSegment = (data) => api.post('/api/customers/segment', data);
export const sendMessage = (data) => api.post('/api/campaigns/send', data);

export default api;
