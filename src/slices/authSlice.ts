import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface AuthState {
  deviceId: string | null;
  mpin: string | null;
  username: string | null;
}

const initialState: AuthState = {
  deviceId: null,
  mpin: null,
  username: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.deviceId = action.payload;
    },
    setMpin: (state, action: PayloadAction<string>) => {
      state.mpin = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const {setDeviceId, setMpin, setUsername} = authSlice.actions;

export const getDeviceId = (state: RootState) => state.auth.deviceId;
export const getMpin = (state: RootState) => state.auth.mpin;
export const getUsername = (state: RootState) => state.auth.username;

export default authSlice.reducer;
