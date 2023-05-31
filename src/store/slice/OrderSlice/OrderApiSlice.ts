import { apiSlice } from '..';
import { Order } from '../../../Utils/Types';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], string>({
      query: () => '/orders',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ orderId }) => ({
                type: 'Order' as const,
                orderId,
              })),
            ]
          : ['Order'],
    }),

    // getSupplierOrders: builder.query<Order[], string>({
    //   query: (supplierId) => `/orders/${supplierId}`,
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ orderId }) => ({
    //             type: 'Order' as const,
    //             orderId,
    //           })),
    //         ]
    //       : ['Order'],
    // }),

    // TODO: use a comprehensive order which will include the order metadata and the items in that order(orderedItems)
    getOrder: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (result) =>
        result ? [{ type: 'Order', id: result.orderId }] : ['Order'],
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery } = orderApiSlice;
