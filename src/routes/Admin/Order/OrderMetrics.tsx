import { FC } from 'react';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import Warning from '@mui/icons-material/Warning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Box, Typography } from '@mui/material';

type Props = {};

const OrderMetrics: FC<Props> = ({}) => {
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
            Pending Orders
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            12
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
            Received Orders
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            4
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
            Shipped Orders
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            10
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
            Cost of Pending Orders
          </Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>
            170,530
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
