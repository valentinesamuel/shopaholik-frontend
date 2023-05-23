import dayjs, { Dayjs } from 'dayjs';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForever from '@mui/icons-material/DeleteForever';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface Props {}

const NewOrderModal: FC<Props> = ({}) => {
  const [measurementUnit, setMeasurementUnit] = useState('');
  const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );

  const handleMeasurementUnitChange = (event: SelectChangeEvent) => {
    setMeasurementUnit(event.target.value as string);
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
            id="name"
            label="Prodcut Name"
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
            id="code"
            label="Product Code"
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
          <Select
            labelId="measurement-unit"
            id="measurement-unit"
            value={measurementUnit}
            sx={{
              width: {
                desktop: '30%',
                mobile: '100%',
              },
            }}
            label="measurement-unit"
            onChange={handleMeasurementUnitChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
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
            value={arrivalDate}
            onChange={(newArrivalDate) => setArrivalDate(newArrivalDate)}
          />
          <TextField
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

      <Box>
        <Typography
          sx={{
            margin: {
              mobile: '10% 0 5% 0',
            },
          }}
          variant="h6"
          mb={2}
        >
          Supplier's Information
        </Typography>
        <Box
          sx={{
            margin: '4% 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="code"
            label="Supplier's Name"
            variant="outlined"
            sx={{
              width: {
                desktop: '60%',
                mobile: '100%',
              },
            }}
          />
          <TextField
            label="Phone Number"
            sx={{
              width: {
                desktop: '30%',
                mobile: '100%',
              },
            }}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Box>
        <Box
          sx={{
            margin: '4% 0',
            display: 'flex',
            flexDirection: {
              desktop: 'row',
              mobile: 'column',
            },
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            sx={{
              width: {
                desktop: '50%',
                mobile: '100%',
              },
            }}
          />
          <FormControl
            sx={{
              width: {
                desktop: '40%',
                mobile: '100%',
              },
            }}
          >
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={measurementUnit}
              label="state"
              onChange={handleMeasurementUnitChange}
            >
              <MenuItem value={10}>Bauchi</MenuItem>
              <MenuItem value={20}>Edo State</MenuItem>
              <MenuItem value={30}>Lagos State</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <TextField
        id="outlined-multiline-static"
        label="Additional Information"
        multiline
        fullWidth
        rows={5}
      />

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
  );
};

export default NewOrderModal;
