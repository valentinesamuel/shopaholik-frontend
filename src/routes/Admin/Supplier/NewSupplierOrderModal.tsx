import { useParams } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForever from '@mui/icons-material/DeleteForever';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface Props {
  onClose: () => void;
  open: boolean;
}

const dummyProduct = {
  name: '',
  productCode: '',
  measurementUnit: '',
  quantity: 0,
  dateOfArrival: dayjs(new Date()),
  supplier_id: ''
};

const NewSupplierOrderModal: FC<Props> = ({ open, onClose }) => {
  const { supplierId } = useParams();
  const [newOrder, setNewOrder] = useState(dummyProduct);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { desktop: 'fit-content', mobile: '80%' },
          padding: '30px',
          height: { desktop: 'auto', mobile: '80%' },
          overflowX: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 2% 0',
          }}
        >
          <Typography variant="h4">Place Order</Typography>
          <IconButton
            aria-label="close"
            size="large"
            sx={{ display: { desktop: 'inline-block', mobile: 'none' } }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Box
          sx={{
            margin: {
              desktop: '0',
              mobile: '10% 0 0 0',
            },
          }}
        >
          <Typography variant="h6">Product Information</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <TextField
              name="productName"
              value={newOrder.name}
              onChange={handleChange}
              label="Product Name"
              variant="outlined"
              sx={{
                margin: {
                  mobile: '5% 0',
                  desktop: '3% 0',
                },
                width: {
                  desktop: '60%',
                  mobile: '100%',
                },
              }}
            />
            <TextField
              name="productCode"
              label="Product Code"
              onChange={handleChange}
              value={newOrder.productCode}
              variant="outlined"
              sx={{
                width: {
                  desktop: '30%',
                  mobile: '100%',
                },
              }}
            />
          </Box>
          <Box
            sx={{
              margin: '4% 0',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: {
                mobile: 'column',
                desktop: 'row',
              },
              alignItems: 'center',
            }}
          >
            <TextField
              sx={{
                width: {
                  desktop: '40%',
                  mobile: '100%',
                },
              }}
              name="measurementUnit"
              onChange={handleChange}
              value={newOrder.measurementUnit}
              type="text"
              label="Unit of Measurement"
              variant="outlined"
            />

            <DatePicker
              sx={{
                margin: {
                  mobile: '5% 0',
                  desktop: '0',
                },
                width: {
                  desktop: '40%',
                  mobile: '100%',
                },
              }}
              label="Date of Arrival"
              value={newOrder.dateOfArrival}
              onChange={(newDateOfArrival) =>
                setNewOrder({
                  ...newOrder,
                  dateOfArrival: newDateOfArrival as Dayjs,
                })
              }
            />
            <TextField
              name="quantity"
              value={newOrder.quantity}
              type="number"
              onChange={handleChange}
              placeholder="Quantity"
              sx={{
                width: {
                  desktop: '20%',
                  mobile: '100%',
                },
              }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
        </Box>


        <Box
          sx={{
            marginTop: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              desktop: 'row',
              mobile: 'column',
            },
          }}
        >
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteForever />}
            sx={{
              marginTop: {
                desktop: '0%',
                mobile: '5%',
              },
              width: {
                desktop: '30%',
                mobile: '100%',
              },
            }}
          >
            Cancel Order
          </Button>
          <Button
            color="success"
            startIcon={<DoneAllIcon />}
            variant="contained"
            sx={{
              marginTop: {
                desktop: '0%',
                mobile: '5%',
              },
              width: {
                desktop: '30%',
                mobile: '100%',
              },
            }}
          >
            Place Order
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default NewSupplierOrderModal;
