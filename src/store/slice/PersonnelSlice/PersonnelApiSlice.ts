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
  }),
});

export const { useGetPersonnelsQuery } = personnelApiSlice;
