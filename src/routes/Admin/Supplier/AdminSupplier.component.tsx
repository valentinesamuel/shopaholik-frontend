import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { Search } from '@mui/icons-material';
import SupplierCard from './SupplierCard';
import { useDebounce } from '../../../hooks/UseDebounce';
import BreadCrumbNavigation from '../../../components/BreadCrumbNavigation';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../Utils/StateDispatch';

const AdminSupplier: FC = () => {
  const [searchedSupplier, setSearchedSupplier] = useState('');
  const suppliers = useAppSelector((state) => state.supplierReducer.suppliers);
  const [suppliersList, setSuppliersList] = useState(suppliers);
  let debouncedSearchedSupplier = useDebounce(searchedSupplier, 200);
  const location = useLocation();

  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSupplier(event.target.value);
    debouncedSearchedSupplier = event.target.value;

    const filterSupplierList = suppliers.filter((supplier) =>
      supplier.name
        .toLowerCase()
        .includes((debouncedSearchedSupplier as string).toLowerCase()),
    );
    setSuppliersList(filterSupplierList);
  };

  const searchSupplier = () => {};

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        // height: '100vh',
        overflowX: 'auto',
        padding: { desktop: '1% 3% 3% 3%', mobile: '1% 20px 20px 20px' },
      }}
    >
      <BreadCrumbNavigation currentLocation={location} />
      <FormControl fullWidth>
        <InputLabel htmlFor="searchSupplier">Search Supplier</InputLabel>
        <OutlinedInput
          id="searchSupplier"
          label="Search Supplier"
          onChange={handleSearchedProductChange}
          value={searchedSupplier}
          sx={{
            width: '100%',
            outline: 'none',
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search button"
                onClick={searchSupplier}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Typography
        sx={{ fontWeight: '600', margin: '38px 0 27px 0' }}
        variant="h6"
      >
        Suppliers
      </Typography>
      <Box
        sx={{
          height: 'inherit',
          display: 'grid',
          gridTemplateColumns: {
            mobile: 'repeat(auto-fit, minmax(100%, 30%))',
            tablet: 'repeat(auto-fit, minmax(100%, 33%))',
            desktop: 'repeat(auto-fit, minmax(auto, 32%))',
          },
          gridAutoRows: 'min-content',
          justifyItems: 'stretch',
          justifyContent: 'space-between',
          rowGap: '5%',
        }}
      >
        {suppliersList.map((supplier) => (
          <SupplierCard key={supplier.supplierId} supplier={supplier} />
        ))}
      </Box>
    </Paper>
  );
};

export default AdminSupplier;
