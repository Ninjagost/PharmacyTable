import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from './features/pharmacy/pharmacySlice';

export const store = configureStore({
  reducer: {
    orders: ordersSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
