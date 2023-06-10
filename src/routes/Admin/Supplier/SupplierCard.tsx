import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Supplier } from '../../../Utils/Types';
import dayjs from 'dayjs';

interface Props {
  supplier: Supplier;
}

const SupplierCard: FC<Props> = ({ supplier }) => {
  const navigate = useNavigate();

  const gotoSupplierDetails = () => {
    navigate(`${supplier.supplier_id}`);
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
      onClick={gotoSupplierDetails}
    >
      <Avatar sx={{ width: 80, height: 80, marginRight: '8%' }}>NI</Avatar>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: '600' }}>
          {supplier.name}
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>
          {supplier.address} {supplier.state}. Nigeria
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>{supplier.phone}</Typography>
        <Typography>
          Last used: {dayjs(supplier.last_order_date).format('ll')}
        </Typography>
      </Box>
    </Paper>
  );
};

export default SupplierCard;
