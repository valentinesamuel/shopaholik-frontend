import { apiSlice } from '..';
import { SaleProduct } from '../../../Utils/Types';

export const cashierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePurchase: builder.mutation<unknown, SaleProduct[]>({
      query: () => '/purchase',
      invalidatesTags: ['Metric', 'Product', 'InventoryProduct'],
    }),
  }),
});

export const { useMakePurchaseMutation } = cashierApiSlice;
