import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISession } from '../../shared/types/sessionTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  session: ISession | null;
  pending: boolean;
  error: boolean;
};

const initialState: videoDeviceState = {
  session: null,
  pending: false,
  error: false,
};

export const creatSession = createAsyncThunk('session/creatSession', async (name: string) => {
  const response = await axios
    .post(`http://192.168.5.127:7300/video_device/all/session`, {
      name: name,
    })
    .then((resp) => resp.data)
    .catch((err) => alert(err.message));

  return response;
});

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(creatSession.pending, (state) => {
        state.pending = true;
      })
      .addCase(creatSession.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.session = payload;
      })
      .addCase(creatSession.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const sessionActive = (state: RootState) => state.session;

export default sessionSlice.reducer;
