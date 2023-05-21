import {
  Box,
  Button,
  IconButton,
  Paper,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForever from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SelectOptions from './SelectOptions';
import { ShippingStatus } from '../Utils/Types';

const statusOptions = [
  { value: ShippingStatus.CONFIRMED, name: 'Confirmed', id: ' 1' },
  { value: ShippingStatus.PENDING, name: 'Pending', id: ' 2 ' },
  { value: ShippingStatus.DELIVERED, name: 'Delivered', id: '3' },
];

interface Props {}

const ProductOrderDetailModal: FC<Props> = () => {
  const [shippingstatus, setShippingstatus] = useState('');

  const handleShippingStatusChange = (event: SelectChangeEvent) => {
    setShippingstatus(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <Paper
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { desktop: '40%', mobile: '80%' },
        padding: '30px',
        height: { desktop: 'auto', mobile: '80%' },
        overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disabled startIcon={<CreateIcon />} variant="contained">
          Edit Order
        </Button>
        <IconButton
          aria-label="close"
          size="large"
          sx={{ display: { desktop: 'inline-block', mobile: 'none' } }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Typography sx={{ margin: '1.5% 0' }} variant="h4">
        Nike Alphafly
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { mobile: 'column', desktop: 'row' },
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ marginBottom: '29px' }}>
            <Typography sx={{ 1: '#96989E' }}>Date of Placement</Typography>
            <Typography variant="subtitle1">12 May, 2023</Typography>
          </Box>
          <Box sx={{ marginBottom: '29px' }}>
            <Typography sx={{ color: '#96989E' }}>
              Estimated Date of Arrival
            </Typography>
            <Typography variant="subtitle1">24 May, 2023</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
              Quantity:
            </Typography>
            <Typography variant="subtitle1">50</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
              Unit Price:
            </Typography>
            <Typography variant="subtitle1">1000</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
              Total Price:
            </Typography>
            <Typography variant="subtitle1">50000</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              marginBottom: '37px',
              marginTop: {
                desktop: '0',
                mobile: '5%',
              },
              textAlign: { desktop: 'right', mobile: 'left' },
            }}
          >
            <Typography sx={{ color: '#96989E' }}>Order Number</Typography>
            <Typography variant="subtitle1">4WNGO39EJ46</Typography>
          </Box>
          <Box
            sx={{
              marginBottom: '49px',
              textAlign: { desktop: 'right', mobile: 'left' },
              display: 'grid',
              placeItems: { desktop: 'end', mobile: 'left' },
            }}
          >
            <Typography sx={{ color: '#96989E', marginBottom: '10px' }}>
              Shipping Status
            </Typography>
            <SelectOptions
              width="max-content%"
              selectLabel="Shipping Status"
              options={statusOptions}
              value={shippingstatus}
              label="shipping-status"
              handleChange={handleShippingStatusChange}
            />
          </Box>
          <Box
            sx={{
              marginBottom: '37px',
              textAlign: { desktop: 'right', mobile: 'left' },
              display: 'grid',
              placeItems: { desktop: 'end', mobile: 'left' },
            }}
          >
            <Typography sx={{ color: '#96989E' }}>
              Supplier Information
            </Typography>
            <Typography variant="caption" sx={{ marginTop: '1% ' }}>
              Nestle Inc.
            </Typography>
            <Typography variant="body1" sx={{ width: '90%', margin: '1.5% 0' }}>
              22-24 Industrial Avenue, Ilupeju. PMB 21164 Ikeja, Lagos State.
              Nigeria
            </Typography>
            <Typography variant="body1">+234 (1) 280 1300</Typography>
          </Box>
        </Box>
      </Box>
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
        <Button sx={{margin:{desktop: '0', mobile:'4% 0'}}} color="error" startIcon={<DeleteForever />} variant="contained">
          Delete Order
        </Button>
        <Button sx={{margin:{desktop: '0', mobile:'4% 0'}}} color="info" startIcon={<SaveIcon />} variant="contained">
          Save Order
        </Button>
        <Button sx={{margin:{desktop: '0', mobile:'4% 0'}}} color="success" startIcon={<DoneAllIcon />} variant="contained">
          Confirm Delivery
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductOrderDetailModal;
