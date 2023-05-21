import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Tab,
  Tabs,
} from '@mui/material';
import Search from '@mui/icons-material/Search';

import TabPanel from '../../../components/TabPanel.component';
import { ChangeEvent, useState } from 'react';
import InventoryMetrics from './InventoryMetrics';

import TopSellingProduct from '../../../components/TopSellingProduct';
import { categories } from '../categories';
import SelectOptions from '../../../components/SelectOptions';
import { inventoryTabs } from '../OrderandShippinTab';
import ProductDetailModal from '../../../components/ProductDetailModal';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ManagerInventory = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [searchedProduct, setSearchedProduct] = useState('');
  const [category, setCategory] = useState('electronics');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    console.log(event.target.value);
  };

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
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
          />
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <OutlinedInput
              label="Search Product"
              onChange={handleSearchedProductChange}
              value={searchedProduct}
              placeholder="Search Products"
              sx={{
                marginLeft: 5,
                outline: 'none',
              }}
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
          </Box>
        </Box>
      </Box>

      <TabPanel value={currentTab} index={0}>
        <TopSellingProduct source="product" />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TopSellingProduct source="product" />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <TopSellingProduct source="product" />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <TopSellingProduct source="product" />
      </TabPanel>
    </Paper>
  );
};

export default ManagerInventory;
