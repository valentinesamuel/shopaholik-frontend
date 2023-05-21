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
import { ChangeEvent, FC, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { categories } from '../categories';
import { Search } from '@mui/icons-material';
import TabPanel from '../../../components/TabPanel.component';
import TopSellingProduct from '../../../components/TopSellingProduct';
import OrderMetrics from './OrderMetrics';
import { orderTabs } from '../OrderandShippinTab';
import ProductOrderDetailModal from '../../../components/ProductOrderDetailModal';

type Props = {};

const ManagerOrder: FC<Props> = ({}) => {
  const [category, setCategory] = useState('electronics');
  const [searchedOrder, setSearchedOrder] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedOrder(event.target.value);
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
      <OrderMetrics />

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
            {orderTabs.map((tab: (typeof orderTabs)[0]) => {
              return <Tab key={tab.id} label={tab.label} />;
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
              onChange={handleSearchChange}
              value={searchedOrder}
              placeholder="Search Products"
              sx={{
                marginLeft: 5,
                outline: 'none',
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search button"
                    onClick={() => console.log(searchedOrder)}
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
        <TopSellingProduct source="order" />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TopSellingProduct source="order" />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <TopSellingProduct source="order" />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <TopSellingProduct source="order" />
      </TabPanel>
    </Paper>
  );
};

export default ManagerOrder;
