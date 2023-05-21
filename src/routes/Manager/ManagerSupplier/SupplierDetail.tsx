import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { shippingStatusOptions } from '../categories';
import SelectOptions from '../../../components/SelectOptions';
import AddIcon from '@mui/icons-material/Add';
import { orderTabs } from '../OrderandShippinTab';
import TabPanel from '../../../components/TabPanel.component';

interface Props {}

const SupplierDetail: FC<Props> = ({}) => {
  const [search, setSearchOrder] = useState('');
  const [shippingStatus, setShippingStatus] = useState('pending');
  const [currentTab, setCurrentTab] = useState(0);

  const handleShippingStatusChange = (event: SelectChangeEvent) => {
    setShippingStatus(event.target.value);
  };

  const handleTabChange = (_: SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchOrder(event.target.value);
  };

  return (
    <Paper>
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
        <Box>
          <OutlinedInput
            label="Search Product"
            onChange={handleSearchChange}
            fullWidth
            sx={{
              margin: {
                desktop: '0 0 15% 0',
                mobile: '0 0 5% 0',
              },
            }}
            value={search}
            placeholder="Search Products"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search button"
                  onClick={() => console.log(search)}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
          <SelectOptions
            width="100%"
            selectLabel="Shipping Status"
            label="shipping-status"
            options={shippingStatusOptions}
            handleChange={handleShippingStatusChange}
            value={shippingStatus}
          />
        </Box>
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
          <Button startIcon={<AddIcon />}>Place New Order</Button>
        </Box>
      </Box>

      <TabPanel value={currentTab} index={0}>
        {/* <TopSellingProduct source="product" /> */}
        <p>all products</p>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        {/* <TopSellingProduct source="product" /> */}
        <p>shipped products</p>
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        {/* <TopSellingProduct source="product" /> */}
        <p>pending products</p>
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        {/* <TopSellingProduct source="product" /> */}
        <p>received products</p>
      </TabPanel>
    </Paper>
  );
};

export default SupplierDetail;
