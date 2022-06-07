import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface AuthState {
  deviceId: string;
  mpin: string;
  username: string;
  lastTimeLogin: string;
}

const initialState: AuthState = {
  deviceId: '',
  mpin: '',
  username: '',
  lastTimeLogin: '',
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
    setLastimeLogin: (state, action: PayloadAction<string>) => {
      state.lastTimeLogin = action.payload;
    },
  },
});

export const {setDeviceId, setMpin, setUsername, setLastimeLogin} =
  authSlice.actions;

export const getDeviceId = (state: RootState) => state.auth.deviceId;
export const getMpin = (state: RootState) => state.auth.mpin;
export const getUsername = (state: RootState) => state.auth.username;
export const getLasttimeLogin = (state: RootState) => state.auth.lastTimeLogin;

export default authSlice.reducer;
