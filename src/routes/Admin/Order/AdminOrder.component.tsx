import {
  Box,
  Breadcrumbs,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { Search } from '@mui/icons-material';
import OrderMetrics from './OrderMetrics';
import { orderTabs } from '../../../Utils/OrderandShippinTab';
import OrdersTable from './OrdersTable';
import { useDebounce } from '../../../hooks/UseDebounce';
import { useLocation } from 'react-router-dom';
import BreadCrumbNavigation from '../../../components/BreadCrumbNavigation';

interface Props {}

const AdminOrder: FC<Props> = ({}) => {
  const [searchedOrder, setSearchedOrder] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [filter, setFilter] = useState('');
  const debouncedSearchedOrder = useDebounce(searchedOrder, 500);
  const location = useLocation();

  const handleTabChange = (_: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
    setFilter(orderTabs[newTab].shippingStatusTab);
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
      <BreadCrumbNavigation currentLocation={location} />
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

        <FormControl
          fullWidth
          sx={{ width: { desktop: '50%', mobile: '100%' } }}
        >
          <InputLabel htmlFor="searchProduct">Search Order</InputLabel>
          <OutlinedInput
            id="searchProduct"
            label="Search Order"
            onChange={handleSearchChange}
            value={searchedOrder}
            placeholder="Search Order"
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
        </FormControl>
      </Box>

      <OrdersTable
        searchFilter={debouncedSearchedOrder as string}
        filterTab={filter}
      />
    </Paper>
  );
};

export default AdminOrder;
