import { apiSlice } from '..';
import { Product, SaleProduct } from '../../../Utils/Types';

export const cashierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePurchase: builder.mutation<unknown, SaleProduct[]>({
      query: (saleList) => ({
        url: '/cashier/purchase',
        method: 'POST',
        body: saleList,
      }),
      invalidatesTags: ['Product', 'InventoryProduct'],
    }),
    searchProduct: builder.mutation<SaleProduct[], string>({
      query: (paramValue) => ({
        url: `/cashier/search?params=${paramValue}`,
        transformResponse: (response: Product[]): SaleProduct[] => {
          return response.map((product) => ({
            ...product,
            saleQuantity: 1,
          }));
        },
      }),
    }),
  }),
});

export const { useMakePurchaseMutation, useSearchProductMutation } =
  cashierApiSlice;
