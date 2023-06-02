import { createSlice } from '@reduxjs/toolkit';
import { ADMINROLE, User } from '../../../Utils/Types';

interface IinitialState {
  user: User;
}

const initialState: IinitialState = {
  user: {
    name: 'Uthred Athelstan',
    role: ADMINROLE.MANAGER,
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
