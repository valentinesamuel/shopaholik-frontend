import { apiSlice } from '..';
import { Product, SaleProduct } from '../../../Utils/Types';

export const cashierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePurchase: builder.mutation<unknown, SaleProduct[]>({
      query: () => '/purchase',
      invalidatesTags: ['Metric', 'Product', 'InventoryProduct'],
    }),
    searchProduct: builder.query<Product[], string>({
      query: (searchString) => `/search/scassd`,
      // query: (searchString) => `/search${searchString}`,
    }),
  }),
});

export const { useMakePurchaseMutation, useSearchProductQuery } =
  cashierApiSlice;
