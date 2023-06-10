import { apiSlice } from '..';
import { Personnel } from '../../../Utils/Types';

export const personnelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPersonnels: builder.query<Personnel[], void>({
      query: () => '/personnel',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'Personnel' as const,
                id,
              })),
              'Personnel',
            ]
          : ['Personnel'],
    }),
    getPersonnel: builder.query<Personnel, string>({
      query: (personnelId) => `/personnel/${personnelId}`,
      providesTags: (result) =>
        result
          ? [{ type: 'Personnel', id: result.personnelId }, 'Personnel']
          : ['Personnel'],
    }),
    addPersonnel: builder.mutation<Personnel, Personnel>({
      query: (personnel) => ({
        url: '/personnel',
        method: 'POST',
        body: personnel,
      }),
      invalidatesTags: ['Personnel'],
    }),
    updatePersonnel: builder.mutation<Personnel, Personnel>({
      query: (personnel) => ({
        url: `/personnel/${personnel.personnelId}`,
        method: 'PATCH',
        body: personnel,
      }),
      invalidatesTags: ['Personnel'],
    }),
  }),
});

export const {
  useGetPersonnelsQuery,
  useGetPersonnelQuery,
  useAddPersonnelMutation,
  useUpdatePersonnelMutation,
} = personnelApiSlice;
