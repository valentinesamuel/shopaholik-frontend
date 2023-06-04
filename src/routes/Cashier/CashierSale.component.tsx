import { Clear } from '@mui/icons-material';
import {
  Alert,
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
import SalesItemTable from './SalesItemTable';
import { useAppDispatch, useAppSelector } from '../../Utils/StateDispatch';
import { calculateTotalPrice } from '../../Utils/CalculatePurchasePrice';
import { clearSalesList } from '../../store/slice/CashierSlice/CashierSlice.store';
import { convertNumberToLocale } from '../../Utils/Converter';
import { useDebounce } from '../../hooks/UseDebounce';
import SearchResults from './SearchResults';
import { useMakePurchaseMutation } from '../../store/slice/CashierSlice/CashierApiSlice';

const CashierSale = () => {
  const [searchedProduct, setSearchedSProduct] = useState('');
  const debouncedSearchedProduct = useDebounce(searchedProduct, 1000);
  const [searchedProductCode, setSearchedSProductCode] = useState('');
  const debouncedSearchedProductCode = useDebounce(searchedProductCode, 1000);
  const [completedPurchase, setcompletedPurchase] = useState<{
    success: boolean | null;
    error: boolean | null;
  }>({
    success: null,
    error: null,
  });
  const salesList = useAppSelector((state) => state.cashierReducer.salesList);
  const dispatch = useAppDispatch();
  const [makeSale, { isLoading }] = useMakePurchaseMutation();
  const [cost, setCost] = useState('');

  const handleSearchedProductChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSProduct(event.target.value);
    setSearchedSProductCode('');
  };
  const handleSearchedProductCodeChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchedSProduct('');
    setSearchedSProductCode(event.target.value);
  };

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCost(event.target.value);
  };

  const makePurchase = async () => {
    try {
      // const res: { status: number } = await makeSale(salesList).unwrap();
      await makeSale(salesList)
        .unwrap()
        .then((_res) => {
           setcompletedPurchase({
             error: null,
             success: true,
           });
           setCost(String(0));
           setTimeout(() => {
             setcompletedPurchase({
               error: null,
               success: null,
             });
           }, 2000);
           dispatch(clearSalesList());
        });
    } catch (error) {
      setcompletedPurchase({
        error: true,
        success: null,
      });
      setTimeout(() => {
        setcompletedPurchase({
          error: null,
          success: null,
        });
      }, 2000);
    }
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
      1489
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
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',

              flexDirection: {
                desktop: 'row',
                mobile: 'column',
              },
            }}
          >
            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: {
                  desktop: '30px',
                  mobile: '20px',
                },
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Search an item
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Search an item"
                onChange={handleSearchedProductChange}
                value={searchedProduct}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search button"
                      onClick={() => setSearchedSProduct('')}
                      edge="end"
                    >
                      {searchedProduct && <Clear />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
                Scan an item
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Scan  an item"
                onChange={handleSearchedProductCodeChange}
                value={searchedProductCode}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setSearchedSProductCode('')}
                      aria-label="search button"
                      edge="end"
                    >
                      {searchedProductCode && <Clear />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          {(searchedProduct.length >= 1 || searchedProductCode.length >= 1) && (
            <Paper
              elevation={3}
              sx={{
                position: 'absolute',
                maxHeight: '500%',
                padding: '12px',
                overflow: 'auto',
                zIndex: '2',
                width: '100%',
              }}
            >
              <SearchResults
                searchProductString={debouncedSearchedProduct as string}
                searchProductCodeString={debouncedSearchedProductCode as string}
              />
            </Paper>
          )}
        </Box>
        <SalesItemTable />
      </Paper>
      <Paper
        sx={{
          width: { desktop: '30%', mobile: '100%' },
          padding: '20px',
        }}
      >
        {completedPurchase.error && (
          <Alert severity="error">Failed to make a purchase</Alert>
        )}
        {completedPurchase.success && (
          <Alert severity="success">Sucessfull Purchase.</Alert>
        )}
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
            <Typography variant="h6" sx={{ color: '#03A9F4' }}>
              Total
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              N {convertNumberToLocale(calculateTotalPrice(salesList))}
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
                N {convertNumberToLocale(+cost)}
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
                N{' '}
                {convertNumberToLocale(calculateTotalPrice(salesList) - +cost)}
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
              Pay
            </Button>
            <TextField
              type="text"
              placeholder="Amount Paid"
              value={+cost}
              onChange={handleCostChange}
              // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
        </Stack>
        <Stack sx={{ marginBottom: { desktop: '5%', mobile: '12%' } }}>
          <Button
            sx={{ margin: '20px 0' }}
            fullWidth
            variant="contained"
            color="success"
            disabled={
              calculateTotalPrice(salesList) - Number(cost) > 0 ? true : false
            }
            onClick={makePurchase}
          >
            {isLoading ? 'Making Purchase' : 'Purchase'}
          </Button>

          <Button
            sx={{ margin: '20px 0' }}
            fullWidth
            disabled={isLoading}
            variant="contained"
            color="error"
            onClick={() => dispatch(clearSalesList())}
          >
            {isLoading ? 'Making Purchase' : 'Cancel'}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CashierSale;
