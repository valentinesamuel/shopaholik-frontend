import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apimocha.com/shopaholk',
  }),
  tagTypes: [
    'Order',
    'Supplier',
    'Personnel',
    'Product',
    'InventoryProduct',
    'Metric',
  ],
  endpoints: () => ({}),
});
