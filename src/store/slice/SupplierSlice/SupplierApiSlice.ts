import { apiSlice } from '..';
import { Supplier } from '../../../Utils/Types';

export const supplierApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuppliers: builder.query<Supplier[], string>({
      query: () => '/suppliers',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ supplierId }) => ({
                type: 'Supplier' as const,
                supplierId,
              })),
            ]
          : ['Supplier'],
    }),

    getSupplier: builder.query<Supplier, string>({
      query: (id) => `/suppliers/${id}`,
      providesTags: (result) =>
        result ? [{ type: 'Supplier', id: result.supplierId }] : ['Supplier'],
    }),
  }),
});

export const { useGetSupplierQuery, useGetSuppliersQuery } = supplierApiSlice;
