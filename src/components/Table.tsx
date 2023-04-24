import { useMemo } from 'react';
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useTable } from 'react-table';
import Columns from './helpers/Collumns';
import datas from './data/table.json';
import { v4 as uuidv4 } from 'uuid';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FAFBFC',
    color: '#4F4F4F'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FAFBFC'
  },
  '&:last-child td': {
    border: 0
  }
}));

const OrdersTable = () => {
  const columns = useMemo(() => Columns, []);
  const data: any = useMemo(() => datas, []);

  console.log(datas);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <>
      <TableContainer component={Paper} sx={{ width: '100%', borderRadius: '16px' }}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <StyledTableRow {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                {headerGroup.headers.map((column) => (
                  <StyledTableCell {...column.getHeaderProps()} key={uuidv4()}>
                    {column.render('Header')}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <StyledTableRow {...row.getRowProps()} key={uuidv4()}>
                  {row.cells.map((cell) => {
                    return (
                      <StyledTableCell {...cell.getCellProps()} key={uuidv4()}>
                        {cell.render('Cell')}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersTable;
