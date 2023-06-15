import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mokaAPI = axios.create({
  baseURL: 'https://648732b2beba62972790373e.mockapi.io/api/contacts/',
});

export const fetchContacts = createAsyncThunk('contacts', async () => {
  const { data } = await mokaAPI.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await mokaAPI.post('/contacts', { ...contact });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delteContact',
  async id => {
    const { data } = await mokaAPI.delete(`/contacts/${id}`);
    return data;
  }
);
