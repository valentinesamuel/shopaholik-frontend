import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { FC } from 'react';
import { Data } from '../routes/Admin/Inventory/InventoryProductsTable';

interface Props {
  open: boolean;
  onClose: () => void;
  productDetail: Data;
}

const ProductDetailModal: FC<Props> = ({ open, onClose, productDetail }) => {
  return (
    <Modal keepMounted open={open} onClose={onClose}>
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { mobile: 'column', desktop: 'row' },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography
              sx={{ margin: '1.5% 0', fontWeight: '600', width: '100%' }}
              variant="h5"
            >
              {productDetail && productDetail.name}
              Addidas Climacool
            </Typography>
            <Typography sx={{ margin: '1.5% 0 4% 0' }} variant="body1">
              QPNRTG0Q4
            </Typography>
            {/* <Box sx={{ marginBottom: '29px' }}>
              <Typography sx={{ color: '#96989E' }}>
                Estimated time of arrival
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                24 May, 2023
              </Typography>
            </Box> */}
            <Box sx={{ marginBottom: '29px' }}>
              <Typography sx={{ color: '#96989E' }}>Stock Status</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Low in stock
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Category:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Shoes
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Stock Quantity:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                3
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Expired Date:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Nil
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Unit of Measurement:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Piece
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                marginBottom: '6%',
                marginTop: {
                  desktop: 'inherit',
                  mobile: '10%',
                },
                textAlign: { desktop: 'right', mobile: 'left' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: {
                  mobile: 'left',
                  desktop: 'flex-end',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#96989E',
                  marginRight: '14px',
                  display: {
                    desktop: 'none',
                    mobile: 'block',
                  },
                }}
              >
                Price:
              </Typography>
              <Typography variant="h5">N 25,000</Typography>
            </Box>
            <Box
              sx={{
                marginBottom: '49px',
                textAlign: { desktop: 'right', mobile: 'left' },
                display: 'grid',
                placeItems: { desktop: 'end', mobile: 'left' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                  Shelf Life:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                  Nil
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                  Min. Quantity:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                  15
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                  Max Quantity:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                  100
                </Typography>
              </Box>
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
              <Typography
                variant="caption"
                sx={{ marginTop: '1%', fontWeight: '600' }}
              >
                Nestle Inc.
              </Typography>
              <Typography
                variant="body1"
                sx={{ width: '90%', margin: '1.5% 0' }}
              >
                22-24 Industrial Avenue, Ilupeju. PMB 21164 Ikeja, Lagos State.
                Nigeria
              </Typography>
              <Typography variant="body1">+234 (1) 280 1300</Typography>
            </Box>
          </Box>
        </Box>
        <Button
          color="error"
          startIcon={<DeleteForever />}
          variant="contained"
          sx={{
            marginTop: '7%',
          }}
        >
          Delete Product
        </Button>
      </Paper>
    </Modal>
  );
};

export default ProductDetailModal;
