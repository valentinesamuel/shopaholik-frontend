import { apiSlice } from '..';
import { Product, SaleProduct } from '../../../Utils/Types';

export const cashierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePurchase: builder.mutation<unknown, SaleProduct[]>({
      query: () => '/cashier/purchase',
      invalidatesTags: ['Product', 'InventoryProduct'],
    }),
    searchProduct: builder.mutation<Product[], string>({
      query: (paramValue) => ({
        url: `/cashier/search?param=${paramValue}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useMakePurchaseMutation, useSearchProductMutation } =
  cashierApiSlice;
