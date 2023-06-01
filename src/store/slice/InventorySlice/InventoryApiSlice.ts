import { apiSlice } from '..';
import { Product } from '../../../Utils/Types';

export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventoryProducts: builder.query<Product[], string>({
      query: () => '/inventory',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ product_id }) => ({
                type: 'Inventory' as const,
                id: product_id,
              })),
              { type: 'Inventory' },
            ]
          : ['Inventory'],
    }),
    //   addInventoryProducts: builder.mutation<Product,>
  }),
});

export const { useGetInventoryProductsQuery } = inventoryApiSlice;
