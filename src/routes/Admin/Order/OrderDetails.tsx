import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, Fragment, useState } from 'react';
import SelectOptions from '../../../components/SelectOptions';
import { shippingStatusOptions } from '../../../Utils/categories';
import OrderDetailsTable from './OrderDetailsTable';
import { useLocation, useParams } from 'react-router-dom';
import { orderedItems } from './OrderRows';
import BreadCrumbNavigation from '../../../components/BreadCrumbNavigation';
import {
  useGetOrderQuery,
  useUpdateOrderMutation,
} from '../../../store/slice/OrderSlice/OrderApiSlice';
import { Order, ShippingStatus } from '../../../Utils/Types';

const orderItemRows = orderedItems;

const OrderDetails: FC = () => {
  const [errMsg, setErrMsg] = useState('');
  const { orderId } = useParams();
  const location = useLocation();
  const { data } = useGetOrderQuery(orderId as string);
  const currentOrder = data as Order;
  const [updateOrder, { isLoading }] = useUpdateOrderMutation();

  const handleShippingStatusChange = async (event: SelectChangeEvent) => {
    try {
      const newOrder: Order = {
        ...currentOrder,
        orderId: orderId as string,
        shippingStatus: event.target.value as ShippingStatus,
      };
      await updateOrder(newOrder).unwrap();
      setErrMsg('Updated  product');
      setTimeout(() => {
        setErrMsg('');
      }, 2000);
    } catch (error) {
      setErrMsg('Failed to update order. Please try again');
      setTimeout(() => {
        setErrMsg('');
      }, 2000);
    }
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
      <BreadCrumbNavigation currentLocation={location} />
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
        {errMsg && (
          <Alert
            sx={{
              position: 'fixed',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            severity="error"
          >
            {errMsg}
          </Alert>
        )}
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
          {isLoading ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CircularProgress color="primary" sx={{ mr: 2 }} />{' '}
              <p>Updating delivery status</p>
            </Box>
          ) : (
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
              value={data ? data.shippingStatus : ShippingStatus.PENDING}
            />
          )}
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
