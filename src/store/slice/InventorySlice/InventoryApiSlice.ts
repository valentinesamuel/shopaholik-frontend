import { Product } from './../../../Utils/Types';
import { apiSlice } from '..';

export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventoryProducts: builder.query<Product[], void>({
      query: () => '/product',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ product_id }) => ({
                type: 'InventoryProduct' as const,
                id: product_id,
              })),
              { type: 'InventoryProduct' },
              { type: 'Product' },
            ]
          : ['InventoryProduct'],
    }),
    addInventoryProducts: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/product',
        method: 'POST',
        product,
      }),
      invalidatesTags: ['InventoryProduct', 'Order', 'Product'],
    }),
    deleteInventoryProducts: builder.mutation<Product, string>({
      query: (id) => ({
        url: '/product',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Order', 'InventoryProduct', 'Product'],
    }),
  }),
});

export const {
  useGetInventoryProductsQuery,
  useAddInventoryProductsMutation,
  useDeleteInventoryProductsMutation,
} = inventoryApiSlice;
