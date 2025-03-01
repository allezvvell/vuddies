import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppUser } from '../../typings/user';

interface UserState {
  user: AppUser | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
