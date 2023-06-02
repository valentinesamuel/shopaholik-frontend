import { createSlice } from '@reduxjs/toolkit';
import { ADMINROLE, User } from '../../../Utils/Types';
import { userApiSlice } from './UserApiSlice';

interface IinitialState {
  user: User | null;
}

const initialState: IinitialState = {
  user: {
    name: 'Uthred Ragnarson',
    role: ADMINROLE.MANAGER,
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApiSlice.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      },
    );
    builder.addMatcher(
      userApiSlice.endpoints.logoutUser.matchFulfilled,
      (state, _) => {
        state.user = null;
      },
    );
  },
});

export default userSlice.reducer;
