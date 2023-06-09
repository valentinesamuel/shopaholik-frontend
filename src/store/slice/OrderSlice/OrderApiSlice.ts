import { apiSlice } from '..';
import { Order } from '../../../Utils/Types';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => '/order',
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

    getSupplierOrders: builder.query<Order[], string>({
      query: (supplierId) => `/order/${supplierId}`,
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

    getOrder: builder.query<Order, string>({
      query: (id) => `/order/${id}`,
      providesTags: (result) =>
        result ? [{ type: 'Order', id: result.orderId }] : ['Order'],
    }),

    updateOrder: builder.mutation<Order, Order>({
      query: (order) => ({
        url: `/order/${order.orderId}`,
        method: 'PATCH',
        body: order,
      }),
      // invalidatesTags: ['Metric'],
    }),
  }),
});
export const {
  useGetOrderQuery,
  useGetSupplierOrdersQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} = orderApiSlice;
