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

    getSupplierOrders: builder.query<Order[], string>({
      query: (supplierId) => `/orders/${supplierId}`,
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
      query: (id) => `/orders/${id}`,
      providesTags: (result) =>
        result ? [{ type: 'Order', id: result.orderId }] : ['Order'],
    }),

    updateOrder: builder.mutation<Order, Order>({
      query: (updatedOrder) => ({
        url: `/orders/${updatedOrder.orderId}`,
        method: 'PATCH',
        body: updatedOrder,
      }),
      invalidatesTags: ['Metric'],
    }),
  }),
});
export const {
  useGetOrderQuery,
  useGetSupplierOrdersQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} = orderApiSlice;
