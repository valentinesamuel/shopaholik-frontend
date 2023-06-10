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
import { Order } from '../../../Utils/Types';
import { getShippingStatusColor } from '../../../Utils/StatusColor';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { filterAndSearchOrders } from '../Order/helpers';
import dayjs, { Dayjs } from 'dayjs';

interface Column {
  id:
    | 'orderNumber'
    | 'dateOfOrder'
    | 'price'
    | 'estimatedTimeOfArrival'
    | 'shippingStatus';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
  formatDate?: (value: Dayjs) => string;
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
    formatDate: (value: Dayjs) => dayjs(value).format('ll'),
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
    formatDate: (value: Dayjs) => dayjs(value).format('ll'),
  },
];

const SupplierOrderTableContainer = styled(Box)`
  height: fit-content;
`;

const SupplierOrderTable: React.FC<{
  filterTab: string;
  searchFilter: string;
  orders: Order[];
}> = ({ filterTab, searchFilter, orders }) => {
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
    <SupplierOrderTableContainer>
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
              {filterAndSearchOrders(orders && orders, filterTab, searchFilter)
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
                                color: getShippingStatusColor(
                                  column,
                                  value as string,
                                ),
                              }}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : column.formatDate
                                ? column.formatDate(dayjs(value))
                                : String(value)}
                            </TableCell>
                          );
                        })}
                        <TableCell align="right">
                          <TableModal orderRow={row} />
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
          count={orders?.length || 0}
          key={page}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </SupplierOrderTableContainer>
  );
};

export default SupplierOrderTable;

const TableModal: React.FC<{ orderRow: Order }> = ({ orderRow }) => {
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        onClick={() => navigate(`/manager/order/${orderRow.orderNumber}`)}
      >
        <InfoIcon />
      </IconButton>
    </div>
  );
};
