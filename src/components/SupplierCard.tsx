import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  destination: string;
}

const SupplierCard: FC<Props> = ({ destination }) => {
  const navigate = useNavigate();

  const gotoSupplierDetails = () => {
    navigate(`${destination}`);
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
          Nestle Inc
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>
          22-24 Industrial Avenue, Ilupeju. PMB 21164 Ikeja, Lagos State.
          Nigeria
        </Typography>
        <Typography sx={{ margin: '10px 0' }}>+234 (1) 280 1300</Typography>
        <Typography>Last used: 4 days ago </Typography>
      </Box>
    </Paper>
  );
};

export default SupplierCard;
