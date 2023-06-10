import { Box, IconButton, Skeleton } from '@mui/material';
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
import { Product } from '../../../Utils/Types';
import { filterAndSearchInventoryItems } from './helpers';

import { useGetInventoryProductsQuery } from '../../../store/slice/InventorySlice/InventoryApiSlice';

interface Column {
  id: 'name' | 'unit_price' | 'quantity_sold' | 'stock_status' | 'category';
  label: string;
  minWidth?: number | string;
  width?: number | string;
  align?: 'right' | 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'Product Name',
    minWidth: '30%',
    width: '40%',
    align: 'left',
  },
  {
    id: 'unit_price',
    label: 'Price (₦)',
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
    align: 'center',
  },
];

const InventoryProductTableContainer = styled(Box)`
  height: fit-content;
`;

const InventoryProductTable: React.FC<{
  filterTab: string;
  filterCategory: string;
  searchFilter: string;
}> = ({ filterTab, filterCategory, searchFilter }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data, isLoading } = useGetInventoryProductsQuery();
  const inventoryProducts = data;

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton variant="rectangular" width={'100%'} height={100} />;
        <Skeleton
          variant="rectangular"
          sx={{ margin: '3% 0' }}
          width={'100%'}
          height={100}
        />
        <Skeleton
          variant="rectangular"
          sx={{ margin: '3% 0' }}
          width={'100%'}
          height={100}
        />
        <Skeleton
          variant="rectangular"
          sx={{ margin: '3% 0' }}
          width={'100%'}
          height={100}
        />
      </div>
    );
  }

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
              {inventoryProducts &&
                filterAndSearchInventoryItems(
                  inventoryProducts,
                  filterTab,
                  searchFilter,
                  filterCategory,
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <React.Fragment key={row.name}>
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
                            <TableModal product={row} />
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
          count={inventoryProducts?.length || 0}
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

const TableModal: React.FC<{ product: Product }> = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MoreHoriz />
      </IconButton>

      <ProductDetailModal
        open={open}
        onClose={() => setOpen(false)}
        productDetail={product}
      />
    </div>
  );
};
