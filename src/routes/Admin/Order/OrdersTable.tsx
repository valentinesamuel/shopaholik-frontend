import { Box, IconButton, Modal } from '@mui/material';
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
import ProductDetailModal from '../../../components/ProductDetailModal';
import { ShippingStatus } from '../../../Utils/Types';
import dayjs from 'dayjs';
import { getShippingStatusColor } from '../../../Utils/StatusColor';

interface Column {
  id:
    | 'orderNumber'
    | 'supplier'
    | 'dateOfOrder'
    | 'price'
    | 'estimatedTimeOfArrival'
    | 'shippingStatus';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'orderNumber',
    label: 'Order No.',
    minWidth: '5%',
    width: '6%',
    align: 'left',
  },
  {
    id: 'dateOfOrder',
    label: 'Date of Order',
    // minWidth: 100
    align: 'center',
  },
  {
    id: 'shippingStatus',
    label: 'Status',
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'price',
    label: 'Price',
    format: (value: number) => value.toLocaleString('en-US'),
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'estimatedTimeOfArrival',
    label: 'ETA',
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'supplier',
    label: 'Supplier',
    // minWidth: 170,
    align: 'center',
  },
];

interface Data {
  orderNumber: string;
  price: number;
  shippingStatus: ShippingStatus;
  dateOfOrder: string;
  estimatedTimeOfArrival: string;
  supplier: string;
}

function createData(
  orderNumber: string,
  price: number,
  dateOfOrder: dayjs.Dayjs,
  shippingStatus: ShippingStatus,
  estimatedTimeOfArrival: dayjs.Dayjs,
  supplier: string,
): Data {
  return {
    orderNumber,
    price,
    dateOfOrder: dateOfOrder.format('D MMM, YYYY.  H:M A'),
    shippingStatus,
    estimatedTimeOfArrival: estimatedTimeOfArrival.format(
      'D MMM, YYYY.  H:M A',
    ),
    supplier,
  };
}

const rows = [
  createData(
    'W4NU935',
    12000,
    dayjs(new Date()),
    ShippingStatus.DELIVERED,
    dayjs(new Date()),
    'Nike Inc',
  ),
  createData(
    'KF5M6YR',
    63060,
    dayjs(new Date()),
    ShippingStatus.PENDING,
    dayjs(new Date()),
    'Nestle Inc',
  ),
];

const OrdersTableContainer = styled(Box)`
  height: fit-content;
`;

const OrdersTable: React.FC = () => {
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
    <OrdersTableContainer>
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
                <TableCell
                  sx={{ backgroundColor: 'primary.main', width: '5%' }}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <React.Fragment key={row.orderNumber}>
                      <TableRow
                        sx={{ cursor: 'pointer' }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              align={column.align}
                              key={column.id}
                              sx={{
                                color: getShippingStatusColor(column, value),
                              }}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : String(value)}
                            </TableCell>
                          );
                        })}
                        <TableCell align="right">
                          <TableModal />
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
          count={rows.length}
          key={page}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </OrdersTableContainer>
  );
};

export default OrdersTable;

const TableModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MoreHoriz />
      </IconButton>

      <ProductDetailModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
