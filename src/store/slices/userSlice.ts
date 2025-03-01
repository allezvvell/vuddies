import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../typings/user';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
