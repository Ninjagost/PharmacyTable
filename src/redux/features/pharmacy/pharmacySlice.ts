import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchAllOrders } from './pharmacyThunks';

type InitState = {
  status: 'idle' | 'loading' | 'success' | 'fail';
  data: any;
};

const initState: InitState = {
  data: [],
  status: 'idle'
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
        //should be like this but there is no data
        // state.data = action.payload.data;
      })
      .addCase(fetchAllOrders.rejected, (state) => {
        state.status = 'fail';
      });
  }
});

export default orderSlice.reducer;

export const getAllOrders = (state: RootState) => state.orders;
export const allOrdersStatus = (state: RootState) => state.orders.status;
