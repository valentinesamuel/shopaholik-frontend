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
import ProductOrderDetailModal from '../../../components/ProductOrderDetailModal';
import ProductDetailModal from '../../../components/ProductDetailModal';
import { StockStatus } from '../../../Utils/Types';

interface Column {
  id: 'product' | 'price' | 'quantity_sold' | 'stock_status';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'product',
    label: 'Product',
    minWidth: '30%',
    width: '50%',
    align: 'left',
  },
  {
    id: 'price',
    label: 'Price',
    // minWidth: 100
    format: (value: number) => value.toLocaleString('en-US'),
    align: 'center',
  },
  {
    id: 'quantity_sold',
    label: 'Quantity Sold',
    // minWidth: 170,
    align: 'center',
  },
  {
    id: 'stock_status',
    label: 'Stock Status',
    // minWidth: 170,
    align: 'center',
  },
];

interface Data {
  product: string;
  price: number;
  quantity_sold: number;
  min_quantity: number;
  stock_quantity: number;
  stock_status: StockStatus;
}

function createData(
  product: string,
  price: number,
  quantity_sold: number,
  min_quantity: number,
  stock_quantity: number,
): Data {
  const stock_status =
    stock_quantity === 0
      ? StockStatus.OUT_OF_STOCK
      : stock_quantity < min_quantity
      ? StockStatus.LOW_IN_STOCK
      : stock_quantity > min_quantity
      ? StockStatus.IN_STOCK
      : StockStatus.EXPIRED;
  return {
    price,
    product,
    quantity_sold,
    stock_quantity,
    min_quantity,
    stock_status,
  };
}

const rows = [
  createData('Moncler Padded Cotton Jacket', 15000, 34, 5, 3),
  createData('Fresh Apples', 50, 100, 10, 2),
  createData('Organic Eggs (Dozen)', 80, 80, 15, 0),
  createData('Premium Coffee Beans', 120, 60, 5, 8),
  createData('Artisanal Bread Loaf', 70, 40, 8, 4),
  createData('Imported Cheese Selection', 150, 30, 3, 0),
  createData('Denim Jeans', 500, 50, 5, 10),
  createData('Cotton T-Shirt', 200, 80, 10, 15),
  createData('Leather Jacket', 1500, 20, 3, 5),
  createData('Designer Dress', 2000, 30, 5, 0),
  createData('Athletic Sneakers', 800, 70, 12, 20),
  createData('Smartphone', 60000, 30, 5, 10),
  createData('Laptop', 80000, 25, 4, 6),
  createData('Wireless Earphones', 5000, 60, 8, 12),
  createData('Smart TV', 90000, 15, 2, 4),
  createData('Gaming Console', 40000, 20, 3, 5),
  createData('Skincare Set', 3000, 40, 6, 10),
  createData('Perfume', 2500, 70, 8, 15),
  createData('Hair Styling Tool', 2000, 60, 10, 18),
  createData('Makeup Palette', 1500, 50, 5, 10),
  createData("Men's Grooming Kit", 1200, 30, 4, 8),
  createData('Cookware Set', 5000, 20, 3, 5),
  createData('Bedding Sheets', 2500, 40, 6, 10),
  createData('Vacuum Cleaner', 3000, 30, 4, 6),
  createData('Air Purifier', 4000, 25, 2, 4),
  createData('Coffee Maker', 2000, 35, 5, 8),
  createData('Travel Backpack', 1500, 50, 8, 12),
  createData('Fitness Tracker', 3000, 30, 5, 10),
  createData('Bluetooth Speaker', 2000, 40, 6, 8),
  createData('Pet Supplies', 1000, 45, 10, 15),
  createData('Outdoor Camping Gear', 5000, 20, 4, 6),
];
const DashboardTopSellingProductContainer = styled(Box)`
  height: fit-content;
`;

const DashboardTopSellingProduct: React.FC = () => {
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
    <DashboardTopSellingProductContainer>
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
                    <React.Fragment key={row.product}>
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
                                : value}
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
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </DashboardTopSellingProductContainer>
  );
};

export default DashboardTopSellingProduct;

const TableModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <MoreHoriz />
      </IconButton>
      <ProductDetailModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};
