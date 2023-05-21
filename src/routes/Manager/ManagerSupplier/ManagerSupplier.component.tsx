import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Search } from '@mui/icons-material';
import SupplierCard from '../../../components/SupplierCard';

const ManagerSupplier = () => {
  const [searchedSupplier, setSearchedSupplier] = useState('');

  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSupplier(event.target.value);
  };

  const searchSupplier = () => {
    console.log(searchedSupplier);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        // height: '100vh',
        overflowX: 'auto',
        padding: { desktop: '1% 3% 3% 3%', mobile: '1% 20px 20px 20px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            tablet: 'space-between',
          },
        }}
      >
        <OutlinedInput
          label="Search Product"
          onChange={handleSearchedProductChange}
          value={searchedSupplier}
          placeholder="Search Supplier"
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
      </Box>
      <Typography
        sx={{ fontWeight: '600', margin: '38px 0 27px 0' }}
        variant="h6"
      >
        Suppliers
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: 'repeat(auto-fit, minmax(100%, 30%))',
            tablet: 'repeat(auto-fit, minmax(100%, 30%))',
            desktop: 'repeat(auto-fit, minmax(auto, 24%))',
          },
          justifyItems: 'stretch',
          justifyContent: 'space-between',
          gap: '1%',
        }}
      >
        <SupplierCard destination="s" />
        <SupplierCard destination="nestleinc" />
        <SupplierCard destination="sdf" />
        <SupplierCard destination="g" />
        <SupplierCard destination="gd" />
        <SupplierCard destination="d" />
        <SupplierCard destination="db" />
        <SupplierCard destination="dggg" />
      </Box>
    </Paper>
  );
};

export default ManagerSupplier;
