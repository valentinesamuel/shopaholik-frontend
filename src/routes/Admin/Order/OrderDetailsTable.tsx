import { Box } from '@mui/material';
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
import { ProductCategory } from '../../../Utils/Types';

interface Column {
  id: 'quantity' | 'productName' | 'totalPrice' | 'unitPrice' | 'category';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'quantity',
    label: 'Qty',
    minWidth: '5%',
    width: '6%',
    align: 'left',
  },
  {
    id: 'productName',
    label: 'Product Name',
    // minWidth: '5%',
    // width: '6%',
    align: 'left',
  },
  {
    id: 'unitPrice',
    label: 'Unit Price',
    format: (value: number) => value.toLocaleString('en-US'),
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'totalPrice',
    label: 'Total Price',
    format: (value: number) => value.toLocaleString('en-US'),
    // minWidth: 170,
    align: 'center',
  },

  {
    id: 'category',
    label: 'Category',
    // minWidth: 170,
    align: 'center',
  },
];

interface Data {
  quantity: number;
  productName: string;
  unitPrice: number;
  totalPrice: number;

  category: ProductCategory;
}

function createData(
  quantity: number,
  productName: string,
  unitPrice: number,
  totalPrice: number,

  category: ProductCategory,
): Data {
  return {
    quantity,
    productName,
    unitPrice,
    totalPrice,
    category,
  };
}

const rows = [
  createData(
    23,
    'Nike Tech Fleece',
    15000,
    345000,
    ProductCategory.CLOTHING_AND_ACCESSORIES,
  ),
];

const OrderDetailsTableContainer = styled(Box)`
  height: fit-content;
`;

const OrderDetailsTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    <OrderDetailsTableContainer>
      <Paper
        elevation={1}
        sx={{
          overflowX: 'auto',
        }}
      >
        <TableContainer sx={{ height: '100%', minHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <React.Fragment key={column.id}>
                    <TableCell
                      sx={{ backgroundColor: 'primary.main' }}
                      align={column.align}
                      style={{ minWidth: column.minWidth, width: column.width }}
                    >
                      {column.label}
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <React.Fragment key={row.productName}>
                      <TableRow
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
                                : String(value)}
                            </TableCell>
                          );
                        })}
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
          count={rows.length}
          key={page}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </OrderDetailsTableContainer>
  );
};

export default OrderDetailsTable;
