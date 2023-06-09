import { apiSlice } from '..';
import { PersonnelLogin, User } from '../../../Utils/Types';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, PersonnelLogin>({
      query: (personnelLoginCredentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: personnelLoginCredentials,
      }),
    }),
    logoutUser: builder.query<null, User>({
      query: () => 'auth/logout',
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserQuery } = userApiSlice;
