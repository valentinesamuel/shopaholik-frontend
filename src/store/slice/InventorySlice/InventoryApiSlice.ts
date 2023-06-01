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
                type: 'InventoryProduct' as const,
                id: product_id,
              })),
              { type: 'InventoryProduct' },
            ]
          : ['InventoryProduct'],
    }),
    getMostSoldInventoryProducts: builder.query<Product[], null>({
      query: () => '/inventory/mostSold',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ product_id }) => ({
                type: 'Product' as const,
                id: product_id,
              })),
              { type: 'Product' },
            ]
          : ['Product'],
      // TODO: when a sale is made, invalidate this tag so that it reflects the new state of the system
    }),
    addInventoryProducts: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/inventory',
        method: 'POST',
        product,
      }),
      invalidatesTags: ['InventoryProduct'],
    }),
  }),
});

export const {
  useGetInventoryProductsQuery,
  useGetMostSoldInventoryProductsQuery,
  useAddInventoryProductsMutation,
} = inventoryApiSlice;
