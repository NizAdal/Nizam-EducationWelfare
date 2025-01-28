import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { account } from '../appwrite/config';

export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus',
  async (_, thunkAPI) => {
    try {
      const session = await account.get(); // Ensure this method correctly checks session status
      return session ? true : false;
    } catch (error) {
      return thunkAPI.rejectWithValue(false);
    }
  }
);

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      account.deleteSession('current');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload;
    });
    builder.addCase(checkAuthStatus.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
