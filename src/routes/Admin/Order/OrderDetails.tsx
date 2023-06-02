import { Box, Paper, SelectChangeEvent, Typography } from '@mui/material';
import { FC, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { shippingStatusOptions } from '../../../Utils/categories';
import OrderDetailsTable from './OrderDetailsTable';
import { useParams } from 'react-router-dom';
import { orderedItems } from './OrderRows';

const orderItemRows = orderedItems;

const OrderDetails: FC = () => {
  const [shippingStatus, setShippingStatus] = useState('');
  const { orderId } = useParams();

  // TODO: call the usequeryorderdetails with the id

  const handleShippingStatusChange = (event: SelectChangeEvent) => {
    setShippingStatus(event.target.value);
    // TODO: update the order details with useupdateorderdetails

    console.log(event.target.value);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        width: '100%',
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
          marginBottom: '40px',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
            <Typography sx={{ color: '#96999F', marginRight: '10px' }}>
              Order Number: \id: {orderId}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>4WNGO39EJ46</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
            <Typography sx={{ color: '#96999F', marginRight: '10px' }}>
              Date of Order:
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>12 May, 2023</Typography>
          </Box>
          <SelectOptions
            sxStyles={{
              width: {
                desktop: '100%',
                mobile: '100%',
                tablet: '60%',
              },
            }}
            selectLabel="Delivery Status"
            label="shipping-status"
            options={shippingStatusOptions}
            handleChange={handleShippingStatusChange}
            value={shippingStatus}
          />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', margin: '20px 0' }}>
            <Typography
              sx={{
                color: '#96999F',
                marginRight: '10px',
                textAlign: 'center',
              }}
            >
              Total Price:
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>N 450,000</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
            <Typography sx={{ color: '#96999F', marginRight: '10px' }}>
              Estimated Time of Arrival:
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>22 May, 2023</Typography>
          </Box>
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
            sx={{ margin: '10px 0', width: '50%', display: 'inline-flex' }}
          >
            22-24 Industrial Avenue, Ilupeju. PMB 21164 Ikeja, Lagos State.
            Nigeria
          </Typography>
          <Typography sx={{ margin: '10px 0' }}>+234 (1) 280 1300</Typography>
        </Box>
      </Box>

      <OrderDetailsTable orderItemRows={orderItemRows} />
    </Paper>
  );
};

export default OrderDetails;
