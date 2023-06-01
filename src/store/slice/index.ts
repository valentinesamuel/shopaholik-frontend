import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Order', 'Supplier', 'Personnel', 'Product', 'InventoryProduct'],
  endpoints: () => ({}),
});
// addPost: build.mutation<Post, Omit<Post, 'id'>>({
//       query: (body) => ({
//         url: 'post',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Post'],
//     }),
