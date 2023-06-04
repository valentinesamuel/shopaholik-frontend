import { Box, Divider, Typography } from '@mui/material';
import { FC, Fragment, useEffect, useState } from 'react';
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
  const [searchProds, setSearchProds] = useState<SaleProduct[]>([]);
  // const { data } = useSearchProductQuery(str as string);

  useEffect(() => {
    const getData = async () => {
      try {
        const getSearchProducts: Promise<SaleProduct[]> = await fetch(
          'https://apimocha.com/shopaholk/search/scassd',
        ).then((response) => response.json());
        setSearchProds(await getSearchProducts);
        // Dispatch the fetched data to the Redux store
      } catch (error) {
        // Handle any errors that occur during the fetch request
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [str]);

  const stateProductsList = useAppSelector(
    (state) => state.cashierReducer.salesList,
  );
  const productList = searchProds
    ? searchProds.map((prod) => ({ ...prod, saleQuantity: 1 } as SaleProduct))
    : stateProductsList;

  return (
    <Box
      sx={{
        height: '2%',
        width: '100%',
        position: 'relative',
      }}
    >
      {searchProds.length >= 1 ? (
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
        <Typography variant="h2">No products found. Try again</Typography>
      )}
    </Box>
  );
};

export default SearchResults;
