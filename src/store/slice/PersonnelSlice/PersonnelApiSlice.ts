import { apiSlice } from '..';
import { Personnel } from '../../../Utils/Types';

export const personnelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPersonnels: builder.query<Personnel[], string>({
      query: () => '/personnels',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ personnelId }) => ({
                type: 'Personnel' as const,
                personnelId,
              })),
            ]
          : ['Personnel'],
    }),
    getPersonnel: builder.query<Personnel, string>({
      query: (personnelId) => `/personnels/${personnelId}`,
      providesTags: (result) =>
        result
          ? [{ type: 'Personnel', id: result.personnelId }]
          : ['Personnel'],
    }),
    addPersonnel: builder.mutation<Personnel, Personnel>({
      query: (personnel) => ({
        url: '/personnels',
        method: 'POST',
        body: personnel,
      }),
      invalidatesTags: ['Personnel'],
    }),
    updatePersonnel: builder.mutation<Personnel, Personnel>({
      query: (personnel) => ({
        url: `/personnels/${personnel.personnelId}`,
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
