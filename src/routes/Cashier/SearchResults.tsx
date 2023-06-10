import { Box, Divider, Typography } from '@mui/material';
import { FC, Fragment, useEffect } from 'react';
import { useSearchProductMutation } from '../../store/slice/CashierSlice/CashierApiSlice';
import { useAppDispatch, useAppSelector } from '../../Utils/StateDispatch';
import { SaleProduct } from '../../Utils/Types';
import { convertNumberToLocale } from '../../Utils/Converter';
import { addToSalesList } from '../../store/slice/CashierSlice/CashierSlice.store';

interface Props {
  searchProductString: string;
  searchProductCodeString: string;
}

const SearchResults: FC<Props> = ({
  searchProductCodeString,
  searchProductString,
}) => {
  const str = searchProductCodeString
    ? searchProductCodeString
    : searchProductString;
  const dispatch = useAppDispatch();
  const [searchProduct, { isLoading }] = useSearchProductMutation();

  useEffect(() => {
    const fetchData = async () => {
      await searchProduct(str);
    };

    fetchData();
  }, [searchProduct, str]);

  const stateProductsList = useAppSelector(
    (state) => state.cashierReducer.salesList,
  );
  const productList = stateProductsList || [];
  if (isLoading) {
    return <Typography variant="body2">Loading..</Typography>;
  }

  return (
    <Box
      sx={{
        height: '2%',
        width: '100%',
        position: 'relative',
      }}
    >
      {productList ? (
        <Fragment>
          {productList.map((saleProd: SaleProduct) => (
            <Fragment key={saleProd.product_id}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(addToSalesList(saleProd))}
              >
                <Typography>{saleProd.name}</Typography>
                <Typography>
                  ₦ {convertNumberToLocale(saleProd.unit_price)}
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                flexItem
                sx={{ margin: '15px 0' }}
              />
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <Typography>No products found. Try again</Typography>
      )}
    </Box>
  );
};

export default SearchResults;
