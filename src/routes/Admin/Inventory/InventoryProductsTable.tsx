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
import ProductDetailModal from '../../../components/ProductDetailModal';
import { ProductCategory, StockStatus } from '../../../Utils/Types';

interface Column {
  id: 'product' | 'price' | 'quantity_sold' | 'stock_status' | 'category';
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
    minWidth: '50%',
    width: '60%',
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
    id: 'category',
    label: 'Category',
    // minWidth: 170,
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
    align: 'right',
  },
];

interface Data {
  product: string;
  price: number;
  quantity_sold: number;
  min_quantity: number;
  category: string;
  stock_quantity: number;
  stock_status: StockStatus;
}

function createData(
  product: string,
  price: number,
  quantity_sold: number,
  min_quantity: number,
  category: string,
): Data {
  const stock_quantity = Math.floor(Math.random() * (min_quantity + 10));
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
    category,
    product,
    quantity_sold,
    stock_quantity,
    min_quantity,
    stock_status,
  };
}

const rows = [
  createData('Fresh Apples', 50, 100, 10, ProductCategory.GROCERIES),
  createData(
    'Organic Eggs (Dozen)',
    80,
    80,
    15,
    ProductCategory.DAIRY_AND_EGGS,
  ),
  createData('Premium Coffee Beans', 120, 60, 5, ProductCategory.BEVERAGES),
  createData(
    'Artisanal Bread Loaf',
    70,
    40,
    8,
    ProductCategory.BAKERY_AND_BAKED_GOODS,
  ),
  createData(
    'Imported Cheese Selection',
    150,
    30,
    3,
    ProductCategory.DAIRY_AND_EGGS,
  ),
  createData(
    "Men's Denim Jeans",
    200,
    50,
    5,
    ProductCategory.CLOTHING_AND_ACCESSORIES,
  ),
  createData(
    "Women's Leather Jacket",
    300,
    30,
    3,
    ProductCategory.CLOTHING_AND_ACCESSORIES,
  ),
  createData(
    "Kids' T-Shirt",
    30,
    100,
    20,
    ProductCategory.CLOTHING_AND_ACCESSORIES,
  ),
  createData(
    'Smartphone',
    1000,
    20,
    2,
    ProductCategory.ELECTRONICS_AND_APPLIANCES,
  ),
  createData('Laptop', 1500, 15, 3, ProductCategory.ELECTRONICS_AND_APPLIANCES),
  createData(
    'Bluetooth Speaker',
    80,
    50,
    10,
    ProductCategory.ELECTRONICS_AND_APPLIANCES,
  ),

  // Beauty & Personal Care
  createData('Shampoo', 10, 200, 50, ProductCategory.PERSONAL_CARE_AND_HYGIENE),
  createData(
    'Face Moisturizer',
    25,
    150,
    30,
    ProductCategory.PERSONAL_CARE_AND_HYGIENE,
  ),
  createData(
    'Deodorant',
    5,
    250,
    60,
    ProductCategory.PERSONAL_CARE_AND_HYGIENE,
  ),
  createData('Cookware Set', 200, 10, 2, ProductCategory.HOME_AND_KITCHEN),
  createData('Coffee Maker', 80, 30, 5, ProductCategory.HOME_AND_KITCHEN),
  createData('Vacuum Cleaner', 150, 20, 3, ProductCategory.HOME_AND_KITCHEN),
  createData('Exercise Ball', 30, 50, 10, ProductCategory.MISCELLANEOUS),
  createData('Travel Backpack', 50, 40, 5, ProductCategory.MISCELLANEOUS),
  createData('Garden Tools Set', 40, 20, 2, ProductCategory.MISCELLANEOUS),
];

const InventoryProductTableContainer = styled(Box)`
  height: fit-content;
`;

const InventoryProductTable: React.FC = () => {
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
    <InventoryProductTableContainer>
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
          key={page}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </InventoryProductTableContainer>
  );
};

export default InventoryProductTable;

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
