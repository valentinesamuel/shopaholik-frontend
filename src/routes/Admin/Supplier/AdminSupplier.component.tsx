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
import SupplierCard from '../../../components/SupplierCard';
import { useDebounce } from '../../../hooks/UseDebounce';

const suppliers = [
  {
    id: 1,
    destination: 'asd',
    name: 'Adele Sutton',
  },
  {
    id: 2,
    destination: 'asd',
    name: 'Catherine Weaver',
  },
  {
    id: 3,
    destination: 'dhtyj',
    name: 'Jonathan Barnes',
  },
  {
    id: 4,
    destination: 'wyj',
    name: 'Zachary Steele',
  },
  {
    id: 5,
    destination: 'weytnfv',
    name: 'Minerva Russell',
  },
  {
    id: 6,
    destination: 'xbn',
    name: 'Jared Ray',
  },
  {
    id: 7,
    destination: 'w35',
    name: 'Nancy Fernandez',
  },
  {
    id: 8,
    destination: 'ktu',
    name: 'Bertie Manning',
  },
  {
    id: 9,
    destination: 'dxfng',
    name: 'Ada Jones',
  },
];
const AdminSupplier: FC = () => {
  const [searchedSupplier, setSearchedSupplier] = useState('');
  const [suppliersList, setSuppliersList] = useState(suppliers);
  const debouncedSearchedSupplier = useDebounce(searchedSupplier, 200);

  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSupplier(event.target.value);
  };

  const searchSupplier = () => {
    const filterSupplierList = suppliers.filter((supplier) =>
      supplier.name
        .toLowerCase()
        .includes((debouncedSearchedSupplier as string).toLowerCase()),
    );
    setSuppliersList(filterSupplierList);
  };

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
          <SupplierCard
            destination={supplier.destination}
            key={supplier.id}
            name={supplier.name}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default AdminSupplier;
