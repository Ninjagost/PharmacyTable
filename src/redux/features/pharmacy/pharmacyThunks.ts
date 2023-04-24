import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../api/axios';

export const fetchAllOrders = createAsyncThunk('orders/fetchAllOrders', async () => {
  const { data } = await request.get(`/client/`);
  return data;
});
