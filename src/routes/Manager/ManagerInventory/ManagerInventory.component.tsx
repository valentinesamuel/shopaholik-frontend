import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
} from '@mui/material';
import Search from '@mui/icons-material/Search';

import TabPanel from './TabPanel.component';
import { ChangeEvent, useState } from 'react';
import InventoryMetrics from './InventoryMetrics';

import TopSellingProduct from '../../../components/TopSellingProduct';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ManagerInventory = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [searchedProduct, setSearchedProduct] = useState('');

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
            <Tab label="All Products" {...a11yProps(0)} />
            <Tab label="Low in stock" {...a11yProps(1)} />
            <Tab label="Out of stock" {...a11yProps(2)} />
            <Tab label="Expired Products" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: {
            tablet: 'space-between'
        } }}>
          <SelectCategories />
          <Box
            sx={{
              //   p: '2px 4px',
              display: 'flex',
            }}
          >
            <OutlinedInput
              label="Search Product"
              onChange={handleSearchedProductChange}
              value={searchedProduct}
              placeholder="Search Prodcuts"
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
        <TopSellingProduct />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TopSellingProduct />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <TopSellingProduct />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <TopSellingProduct />
      </TabPanel>
    </Paper>
  );
};

export default ManagerInventory;

const SelectCategories = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
