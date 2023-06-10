import { apiSlice } from '..';
import { Supplier } from '../../../Utils/Types';

export const supplierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuppliers: builder.query<Supplier[], void>({
      query: () => '/supplier',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ supplier_id }) => ({
                type: 'Supplier' as const,
                supplier_id,
              })),
            ]
          : ['Supplier'],
    }),

    getSupplier: builder.query<Supplier, string>({
      query: (id) => `/supplier/${id}`,
      providesTags: (result) =>
        result ? [{ type: 'Supplier', id: result.supplier_id }] : ['Supplier'],
    }),
  }),
});

export const { useGetSupplierQuery, useGetSuppliersQuery } = supplierApiSlice;
