import { apiSlice } from '..';
import { Order, Supplier } from '../../../Utils/Types';

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

    getSupplierOrders: builder.query<Supplier, string>({
      query: (supplierId) => `/supplier/order/${supplierId}`,
      providesTags: (result) =>
        result
          ? [{ id: result.supplier_id, type: 'Supplier' }, 'Order']
          : ['Order'],
    }),

    getOrder: builder.query<Order, string>({
      query: (orderId) => `/order/${orderId}`,
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
