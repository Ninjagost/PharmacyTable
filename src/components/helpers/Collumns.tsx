/* eslint-disable react/prop-types */
import { orderTypes } from '../../types/orders';
import { Column } from 'react-table';
import { Typography, Chip } from '@mui/material';
import ProductsModal from './ProductsModal';

export const Columns: Column<orderTypes>[] = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Client',
    accessor: 'client',
    Cell: ({ row }) => {
      return (
        <Typography variant="h6" color="initial">
          {row.original.client.full_name}
        </Typography>
      );
    }
  },
  {
    Header: 'Category',
    accessor: 'address',
    Cell: ({ row }) => {
      return (
        <Typography variant="h6" color="initial">
          {row.original.address.title} {row.original.address.x} {row.original.address.y}
        </Typography>
      );
    }
  },
  {
    Header: 'Delivery time',
    accessor: 'deliver_time'
  },
  {
    Header: 'Weight type',
    accessor: 'weight_type'
  },
  {
    Header: 'Products',
    accessor: 'order_items',
    Cell: ({ row }) => {
      return (
        <div>
          <ProductsModal ordered={row.original.order_items} />
        </div>
      );
    }
  },
  {
    Header: 'Status',
    accessor: 'order_type',
    Cell: ({ row }) => {
      return (
        <div>
          <Chip
            label={row.original.order_type}
            sx={{
              bgcolor: row.original.order_type == 'ON' ? '#84E296' : '#F08989',
              color: '#001427'
            }}
          />
        </div>
      );
    }
  }
];
export default Columns;
