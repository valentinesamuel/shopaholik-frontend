import { Product } from './../../../Utils/Types';
import { apiSlice } from '..';

export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventoryProducts: builder.query<Product[], void>({
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
    addInventoryProducts: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/inventory',
        method: 'POST',
        product,
      }),
      invalidatesTags: ['InventoryProduct', 'Metric', 'Order', 'Product'],
    }),
    deleteInventoryProducts: builder.mutation<Product, string>({
      query: (id) => ({
        url: '/inventory',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Metric', 'Order', 'InventoryProduct', 'Product'],
    }),
  }),
});

export const {
  useGetInventoryProductsQuery,
  useAddInventoryProductsMutation,
  useDeleteInventoryProductsMutation,
} = inventoryApiSlice;
