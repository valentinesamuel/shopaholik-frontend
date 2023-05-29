import { Paper } from '@mui/material';
import  { FC } from 'react';

interface Props {}

const OrderDetails: FC<Props> = ({}) => {
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
      OrderDetails
    </Paper>
  );
};

export default OrderDetails;
