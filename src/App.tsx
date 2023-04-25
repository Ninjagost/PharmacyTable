import React from 'react';
import TablePage from './pages/tablePage';
import { allOrdersStatus, getAllOrders } from './redux/features/pharmacy/pharmacySlice';
import { fetchAllOrders } from './redux/features/pharmacy/pharmacyThunks';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getAllOrders);
  const status = useAppSelector(allOrdersStatus);

  React.useMemo(() => dispatch(fetchAllOrders()), []);

  console.log(orders);
  console.log(status);

  return (
    <div>
      <TablePage />
    </div>
  );
};

export default App;
