import { FC } from 'react';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import Warning from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Alert, Box, Skeleton, Typography } from '@mui/material';
import { useAppSelector } from '../../../Utils/StateDispatch';
import { convertNumberToLocale } from '../../../Utils/Converter';
import { useGetMetricsQuery } from '../../../store/slice/MetricSlice/MetricApiSlice';

const OrderMetrics: FC = () => {
  const stateorderMetrics = useAppSelector((state) => state.metricReducer);
  const { data, isError, isLoading } = useGetMetricsQuery();
  const orderMetrics = data ? data : stateorderMetrics;

  if (isLoading) {
    return <Skeleton variant="rectangular" width={'100%'} height={100} />;
  }

  // if (isError) {
  //   return (
  //     <Alert severity="error">
  //       Metrics could not be retrieved. Please refresh this page
  //     </Alert>
  //   );
  // }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          mobile: 'repeat(auto-fit, minmax(100%, 20%))',
          tablet: 'repeat(auto-fit, minmax(100%, 20%))',
          desktop: 'repeat(auto-fit, minmax(300px, 20%))',
        },
        justifyItems: 'stretch',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#D6A013',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {orderMetrics?.pendingOrders.name}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {orderMetrics?.pendingOrders.value}
          </Typography>
        </Box>
        <Box>
          <Warning
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#2F80ED',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {orderMetrics?.receivedOrders.name}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {orderMetrics?.receivedOrders.value}
          </Typography>
        </Box>
        <Box>
          <AccountBalanceWalletIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#BB6BD9',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {orderMetrics?.shippedOrders.name}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {orderMetrics?.shippedOrders.value}
          </Typography>
        </Box>
        <Box>
          <LocalShippingIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#EB5757',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 3 }}>
            {orderMetrics?.costOfPendingOrders.name}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {convertNumberToLocale(
              orderMetrics?.costOfPendingOrders.value as number,
            )}
          </Typography>
        </Box>
        <Box>
          <FmdBadIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OrderMetrics;
