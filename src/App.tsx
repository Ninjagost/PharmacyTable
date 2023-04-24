import React from 'react';
import TablePage from './pages/tablePage';
import { getAllOrders } from './redux/features/pharmacy/pharmacySlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchAllOrders } from './redux/features/pharmacy/pharmacyThunks';

const App = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getAllOrders);

  React.useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  console.log(orders);

  return (
    <div>
      <TablePage />
    </div>
  );
};

export default App;
