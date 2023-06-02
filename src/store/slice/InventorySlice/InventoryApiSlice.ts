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

    // TODO: this this data by filtering the inventory product with quantity_sold > 50
    // getMostSoldInventoryProducts: builder.query<Product[], null>({
    //   query: () => '/inventory/mostSold',
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ product_id }) => ({
    //             type: 'Product' as const,
    //             id: product_id,
    //           })),
    //           { type: 'Product' },
    //         ]
    //       : ['Product'],
    // }),
    addInventoryProducts: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/inventory',
        method: 'POST',
        product,
      }),
      invalidatesTags: ['InventoryProduct'],
    }),
    deleteInventoryProducts: builder.mutation<Product, string>({
      query: (id) => ({
        url: '/inventory',
        method: 'DELETE',
        body: id,
      }),
    }),
  }),
});

export const {
  useGetInventoryProductsQuery,
  // useGetMostSoldInventoryProductsQuery,
  useAddInventoryProductsMutation,
  useDeleteInventoryProductsMutation,
} = inventoryApiSlice;
