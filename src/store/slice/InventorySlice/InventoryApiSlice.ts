import { Product, ProductCategory } from './../../../Utils/Types';
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
      // transformResponse: (response: Product[]) => {
      //   const transformedProduct: Product[] = response.map((product) => {
      //     return {
      //       ...product,
      //       category: stringToCategory(
      //         ProductCategory,
      //         product.category as string,
      //       ),
      //     };
      //   });
      //   return transformedProduct;
      // },
    }),
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
  useAddInventoryProductsMutation,
  useDeleteInventoryProductsMutation,
} = inventoryApiSlice;
