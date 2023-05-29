import { Box, IconButton } from '@mui/material';
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
import { MoreHoriz } from '@mui/icons-material';

interface Column {
  id: 'quantity' | 'product' | 'price';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'left' | 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: '5%',
    width: '5%',
    align: 'left',
  },
  {
    id: 'product',
    label: 'Product',
    minWidth: '85%',
    width: '85%',
    align: 'left',
  },
  {
    id: 'price',
    label: 'Price (N)',
    minWidth: '15%',
    width: '20%',
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  quantity: number;
  product: string;
  price: number;
}

function createData(quantity: number, product: string, price: number): Data {
  return { quantity, product, price };
}

const rows = [
  createData(43, 'Milo refill beverage', 1200),
  createData(1, 'Peak Milk full cream', 3200),
  createData(43, '32gb flash drive', 8000),
];
const TopSellingProductContainer = styled(Box)`
  height: fit-content;
`;

const SalesItemTable: React.FC = () => {
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
    <TopSellingProductContainer>
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
                  <>
                    <TableCell
                      sx={{ backgroundColor: 'primary.main' }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, width: column.width }}
                    >
                      {column.label}
                    </TableCell>
                  </>
                ))}
                <TableCell
                  sx={{ backgroundColor: 'primary.main' }}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <>
                      <TableRow
                        key={row.price}
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
                        <TableCell align="right">
                          <IconButton onClick={() => console.log('removed')}>
                            <MoreHoriz />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </>
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
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </TopSellingProductContainer>
  );
};

export default SalesItemTable;
