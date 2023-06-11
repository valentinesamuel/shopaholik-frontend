import { Box, Divider, Typography } from '@mui/material';
import { FC, Fragment, useEffect, useState } from 'react';
import { useSearchProductMutation } from '../../store/slice/CashierSlice/CashierApiSlice';
import { useAppDispatch, useAppSelector } from '../../Utils/StateDispatch';
import { Product, SaleProduct } from '../../Utils/Types';
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
  const [searchedProducts, setsearchedProducts] = useState<SaleProduct[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await searchProduct(str).unwrap();
      const searchedProducts = res.map((product) => ({
        ...product,
        saleQuantity: 1,
      }));
      setsearchedProducts(searchedProducts);
    };
    fetchData();
  }, [searchProduct, str]);

  if (isLoading) {
    return <Typography variant="body2">Loading..</Typography>;
  }

  return (
    <Box
      sx={{
        height: '4%',
        width: '100%',
        position: 'relative',
      }}
    >
      {searchedProducts ? (
        <Fragment>
          {searchedProducts.map((saleProd: SaleProduct) => (
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
