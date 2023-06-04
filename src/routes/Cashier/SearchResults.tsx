import { Box, Divider, Typography } from '@mui/material';
import { FC, Fragment } from 'react';
import { useSearchProductQuery } from '../../store/slice/CashierSlice/CashierApiSlice';
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

  
  const { data } = useSearchProductQuery(str as string);

  

  const stateProductsList = useAppSelector(
    (state) => state.cashierReducer.salesList,
  );
  const productList = data
    ? data.map((prod) => ({ ...prod, saleQuantity: 1 } as SaleProduct))
    : stateProductsList;

  return (
    <Box
      sx={{
        height: '2%',
        width: '100%',
        position: 'relative',
      }}
    >
      {data ? (
        <Fragment>
          {productList.map((saleProd) => (
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
