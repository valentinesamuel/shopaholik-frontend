import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { orderTabs } from '../../../Utils/OrderandShippinTab';
import NewOrderModal from './NewOrderModal';
import SupplierOrderTable from './SupplierOrderTable';
import { useDebounce } from '../../../hooks/UseDebounce';

interface Props {}

const SupplierDetail: FC<Props> = ({}) => {
  const [searchedOrder, setSearchedOrder] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const debouncedSearchedOrder = useDebounce(searchedOrder, 500);

  const handleTabChange = (_: SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
    setFilter(orderTabs[newTab].shippingStatusTab);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedOrder(event.target.value);
  };

  return (
    <Paper
      elevation={1}
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
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
        }}
      >
        <FormControl
          sx={{
            width: {
              desktop: '50%',
              mobile: '100%',
            },
          }}
        >
          <InputLabel htmlFor="searchorder">Search order</InputLabel>
          <OutlinedInput
            id="searchorder"
            label="Search Order"
            onChange={handleSearchChange}
            value={searchedOrder}
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
        <Box
          sx={{
            textAlign: {
              desktop: 'right',
              mobile: 'left',
            },
            margin: {
              desktop: '0',
              mobile: '4% 0 0 0',
            },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: '600' }}>
            Nestle Inc
          </Typography>
          <Typography
            sx={{ margin: '10px 0', width: '60%', display: 'inline-flex' }}
          >
            22-24 Industrial Avenue, Ilupeju. PMB 21164 Ikeja, Lagos State.
            Nigeria
          </Typography>
          <Typography sx={{ margin: '10px 0' }}>+234 (1) 280 1300</Typography>
          <Typography>Last used: 4 days ago </Typography>
        </Box>
      </Box>

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
            {orderTabs.map((tab) => {
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
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              width: {
                desktop: 'auto',
                mobile: '100%',
              },
            }}
            startIcon={<AddIcon />}
          >
            Place New Order
          </Button>

          <NewOrderModal onClose={() => setOpen(false)} open={open} />
        </Box>
      </Box>

      <SupplierOrderTable
        searchFilter={debouncedSearchedOrder as string}
        filterTab={filter}
      />
    </Paper>
  );
};

export default SupplierDetail;
