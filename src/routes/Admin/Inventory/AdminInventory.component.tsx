import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Tab,
  Tabs,
} from '@mui/material';
import Search from '@mui/icons-material/Search';

import { ChangeEvent, useState } from 'react';
import InventoryMetrics from './InventoryMetrics';
import { categories } from '../../../Utils/categories';
import SelectOptions from '../../../components/SelectOptions';
import { inventoryTabs } from '../../../Utils/OrderandShippinTab';
import AddProductModal from '../../../components/AddProductModal';
import InventoryProductTable from './InventoryProductsTable';
import { useDebounce } from '../../../hooks/UseDebounce';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AdminInventory = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [searchedProduct, setSearchedProduct] = useState('');
  const debouncedSearchedProduct = useDebounce(searchedProduct, 500);
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
    setFilter(inventoryTabs[newTab].stockStatusTab);
  };
  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedProduct(event.target.value);
  };

  const searchProducts = () => {
    console.log(searchedProduct);
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
      <InventoryMetrics />

      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        fullWidth
        sx={{ margin: '5% 0' }}
      >
        Add Product to Inventory
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { desktop: '-webkit-fill-available', mobile: '80%' },
            padding: '30px',
            height: { desktop: 'auto', mobile: '90%' },
            overflowX: 'auto',
          }}
        >
          <AddProductModal />
        </Paper>
      </Modal>

      <Box
        sx={{
          display: 'flex',
          alignItems: { desktop: 'center', tablet: 'stretch' },
          justifyContent: 'space-between',

          flexDirection: {
            mobile: 'column',
            desktop: 'row',
          },
          margin: { mobile: '6% 0 6% 0', desktop: '1% 0 0% 0' },
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            margin: { mobile: '0 0 6% 0', desktop: '1% 0 1% 0' },
            width: { desktop: 'fit-content', mobile: '100%' },
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {inventoryTabs.map((tab) => {
              return (
                <Tab key={tab.id} label={tab.label} {...a11yProps(+tab.id)} />
              );
            })}
          </Tabs>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: {
              tablet: 'space-between',
            },
          }}
        >
          <SelectOptions
            width="50%"
            selectLabel="Categories"
            label="categories"
            options={categories}
            handleChange={handleCategoryChange}
            value={category}
            sxStyles={{ marginRight: '5%' }}
          />

          <FormControl fullWidth>
            <InputLabel htmlFor="searchProduct">Search Product</InputLabel>
            <OutlinedInput
              id="searchProduct"
              label="Search Product"
              onChange={handleSearchedProductChange}
              value={searchedProduct}
              placeholder="Search Products"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search button"
                    onClick={searchProducts}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>

      <InventoryProductTable
        filterTab={filter}
        filterCategory={category}
        searchFilter={debouncedSearchedProduct as string}
      />
    </Paper>
  );
};

export default AdminInventory;
