import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import SelectCategories from './SelectCategories';
import DeleteForever from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';
interface Props {}

const ProductDetailModal: FC<Props> = () => {
  return (
    <Paper
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '40%',
        padding: '30px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disabled startIcon={<CreateIcon />} variant="contained">
          Edit Order
        </Button>
        <IconButton aria-label="close" size="large">
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Typography sx={{ margin: '1.5% 0' }} variant="h3">
        Nike Alphafly
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <Box sx={{ marginBottom: '37px', textAlign: 'right' }}>
            <Typography sx={{ color: '#96989E' }}>Order Number</Typography>
            <Typography variant="subtitle1">4WNGO39EJ46</Typography>
          </Box>
          <Box
            sx={{
              marginBottom: '49px',
              textAlign: 'right',
              display: 'grid',
              placeItems: 'end',
            }}
          >
            <Typography sx={{ color: '#96989E' }}>Shipping Status</Typography>
            <SelectCategories width="40%" />
          </Box>
          <Box
            sx={{
              marginBottom: '37px',
              textAlign: 'right',
              display: 'grid',
              placeItems: 'end',
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
            <Typography variant="body1" >
              +234 (1) 280 1300
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="error" startIcon={<DeleteForever />} variant="contained">
          Delete Order
        </Button>
        <Button color="info" startIcon={<SaveIcon />} variant="contained">
          Save Order
        </Button>
        <Button color="success" startIcon={<DoneAllIcon />} variant="contained">
          Confirm Delivery
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductDetailModal;
