import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

const CashierSale = () => {
  const [searchedProduct, setSearchedSProduct] = useState('');

  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSProduct(event.target.value);
  };

  const searchProduct = () => {
    console.log(searchedProduct);
  };
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        padding: '1% 3% 3% 3%',
        display: 'flex',
        flexDirection: {
          desktop: 'row',
          mobile: 'column',
        },
      }}
    >
      <Paper
        sx={{
          width: { desktop: '80%', mobile: '100%' },
          padding: '20px',
          marginRight: {
            desktop: '30px',
            mobile: '0',
          },
        }}
      >
        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: {
              desktop: '30px',
              mobile: '0',
            },
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Scan or search an item
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            label="Scan or search an item"
            onChange={handleSearchedProductChange}
            value={searchedProduct}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search button"
                  onClick={searchProduct}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
      <Paper
        sx={{
          width: { desktop: '30%', mobile: '100%' },
          padding: '20px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: '5%', fontWeight: 'bold' }}
        >
          Checkout
        </Typography>
        <Stack sx={{ marginBottom: { desktop: '5%', mobile: '12%' } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Subtotal</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              N 200,000
            </Typography>
          </Box>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ margin: '10px 0' }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Discount</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              - N 3,000
            </Typography>
          </Box>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ margin: '10px 0' }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" sx={{ color: '#03A9F4' }}>
              Total
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              N 173,000
            </Typography>
          </Box>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ margin: '10px 0' }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'light' }}>
                PAID
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginLeft: '27px' }}
              >
                N 173,000
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#F44336',
                  fontWeight: 'light',
                }}
              >
                DUE
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginLeft: '27px' }}
              >
                N 173,000
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Typography
          variant="h5"
          sx={{ marginBottom: '5%', fontWeight: 'bold' }}
        >
          Add Payment
        </Typography>
        <Stack sx={{ marginBottom: { desktop: '5%', mobile: '12%' } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              alignItems: { desktop: 'center', mobile: 'flex-start' },
              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
              Cash
            </Button>
            <TextField
              type="number"
              placeholder="Cash"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              alignItems: { desktop: 'center', mobile: 'flex-start' },
              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
              Card
            </Button>
            <TextField
              type="number"
              placeholder="Cash"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              alignItems: { desktop: 'center', mobile: 'flex-start' },
              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
              Cheque
            </Button>
            <TextField
              type="number"
              placeholder="Cash"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              alignItems: { desktop: 'center', mobile: 'flex-start' },
              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
              Gift Card
            </Button>
            <TextField
              type="number"
              placeholder="Cash"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
        </Stack>
        <Stack sx={{ marginBottom: { desktop: '5%', mobile: '12%' } }}>
          <Button
            sx={{ margin: '20px 0' }}
            fullWidth
            variant="contained"
            color="success"
          >
            Pay
          </Button>
          <Button
            sx={{ margin: '20px 0' }}
            fullWidth
            variant="contained"
            color="warning"
          >
            Suspend
          </Button>
          <Button
            sx={{ margin: '20px 0' }}
            fullWidth
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CashierSale;
