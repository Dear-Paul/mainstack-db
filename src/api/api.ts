import axios from 'axios';

const BASE_URL = 'https://fe-task-api.mainstack.io';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchUser = async () => {
  const response = await api.get('/user');
  return response.data;
};

export const fetchWallet = async () => {
  const response = await api.get('/wallet');
  return response.data;
};

export const fetchTransactions = async () => {
  const response = await api.get('/transactions');
  return response.data;
};
