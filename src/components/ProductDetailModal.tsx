import { Alert, Box, Button, Modal, Paper, Typography } from '@mui/material';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { FC, useState } from 'react';
import { Product } from '../Utils/Types';
import { convertNumberToLocale } from '../Utils/Converter';
import dayjs from 'dayjs';
import { useDeleteInventoryProductsMutation } from '../store/slice/InventorySlice/InventoryApiSlice';
import { useAppSelector } from '../Utils/StateDispatch';

interface Props {
  open: boolean;
  onClose: () => void;
  productDetail: Product;
}

const ProductDetailModal: FC<Props> = ({ open, onClose, productDetail }) => {
  const [errMsg, setErrMsg] = useState({
    error: '',
    success: '',
  });
  const role = useAppSelector((state) => state.userReducer.user?.role);

  const [removeProductFromApi, { isLoading }] =
    useDeleteInventoryProductsMutation();

  const deleteProduct = async () => {
    try {
      await removeProductFromApi(productDetail.product_id).unwrap();
      setErrMsg({
        error: '',
        success: 'Product deleted',
      });
      setTimeout(() => {
        setErrMsg({ error: '', success: '' });
      }, 2000);
    } catch (error) {
      setErrMsg({
        error: 'Faild to delete product. Please try again',
        success: '',
      });
      setTimeout(() => {
        setErrMsg({ error: '', success: '' });
      }, 2000);
    }
  };

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
        {errMsg.error && <Alert severity="error">{errMsg.error}</Alert>}
        {errMsg.success && <Alert severity="success">{errMsg.success}</Alert>}
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
            </Typography>
            <Typography sx={{ margin: '1.5% 0 4% 0' }} variant="body1">
              {productDetail && productDetail.product_code}
            </Typography>
            <Box sx={{ marginBottom: '29px' }}>
              <Typography sx={{ color: '#96989E' }}>Stock Status</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                {productDetail && productDetail.stock_status}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Category:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                {productDetail && productDetail.category}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Stock Quantity:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                {productDetail && productDetail.quantity_in_stock}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Expired Date:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                {productDetail &&
                  dayjs(productDetail.expiry_date).format('DD MMMM, YYYY')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                Unit of Measurement:
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                {productDetail && productDetail.unit_of_measurement}
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
              <Typography variant="h5">
                ₦{' '}
                {productDetail &&
                  convertNumberToLocale(productDetail.unit_price)}
              </Typography>
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
                  {productDetail && productDetail.shelf_life_duration}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                  Min. Quantity:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                  {productDetail && productDetail.min_quantity}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#96989E', marginRight: '14px' }}>
                  Qty Sold:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                  {productDetail && productDetail.quantity_sold}
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
                {productDetail && productDetail.supplier_id}
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
        {role === 'MANAGER' && (
          <Button
            color="error"
            disabled={isLoading}
            onClick={deleteProduct}
            startIcon={<DeleteForever />}
            variant="contained"
            sx={{
              marginTop: '7%',
            }}
          >
            {isLoading ? 'Loading...' : 'Delete Product'}
          </Button>
        )}
      </Paper>
    </Modal>
  );
};

export default ProductDetailModal;
