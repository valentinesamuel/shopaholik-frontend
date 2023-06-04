import { Box, IconButton, Typography } from '@mui/material';
import { styled } from 'styled-components';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../../Utils/StateDispatch';
import {
  addToSalesList,
  increaseProductQuantity,
  reduceProductQuantity,
  removeFromSalesList,
} from '../../store/slice/CashierSlice/CashierSlice.store';

interface Column {
  id: 'saleQuantity' | 'name' | 'unit_price';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'left' | 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'saleQuantity',
    label: 'Qty',
    minWidth: '5%',
    width: '5%',
    align: 'left',
  },
  {
    id: 'name',
    label: 'Product',
    minWidth: '85%',
    width: '85%',
    align: 'left',
  },
  {
    id: 'unit_price',
    label: 'Unit Price (N)',
    minWidth: '15%',
    width: '20%',
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

const TopSellingProductContainer = styled(Box)`
  height: fit-content;
`;

const SalesItemTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useAppDispatch();
  const salesList = useAppSelector((state) => state.cashierReducer.salesList);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TopSellingProductContainer>
      {salesList.length > 0 ? (
        <Paper
          elevation={1}
          sx={{
            overflowX: 'auto',
          }}
        >
          <TableContainer sx={{ height: '70%', minHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" sx={{}}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <React.Fragment key={column.id}>
                      <TableCell
                        sx={{
                          backgroundColor: 'primary.main',
                          position: 'unset',
                        }}
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          width: column.width,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    </React.Fragment>
                  ))}
                  <TableCell
                    sx={{
                      backgroundColor: 'primary.main',
                      width: '100%',
                      position: 'unset',
                    }}
                    align="right"
                  ></TableCell>
                  <TableCell
                    sx={{ backgroundColor: 'primary.main', position: 'unset' }}
                    align="right"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <React.Fragment key={row.product_id}>
                        <TableRow
                          key={row.product_id}
                          sx={{ cursor: 'pointer' }}
                          hover
                          role="checkbox"
                          tabIndex={-1}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell align={column.align} key={column.id}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                          <TableCell align="right" sx={{ position: 'unset' }}>
                            <IconButton
                              onClick={() =>
                                dispatch(increaseProductQuantity(row))
                              }
                            >
                              <AddIcon />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                dispatch(reduceProductQuantity(row))
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="right" sx={{ position: 'unset' }}>
                            <IconButton
                              onClick={() => dispatch(removeFromSalesList(row))}
                            >
                              <RemoveCircleIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            sx={{ backgroundColor: 'primary.light' }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={salesList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Typography variant="h5">
          Sorry, no products yet.. Search for prodcuts to add them to the list
        </Typography>
      )}
    </TopSellingProductContainer>
  );
};

export default SalesItemTable;
