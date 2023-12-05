import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISession } from '../../shared/types/sessionTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  session: ISession[] | null;
  pending: boolean;
  error: boolean;
};

const initialState: videoDeviceState = {
  session: null,
  pending: false,
  error: false,
};

export const creatSession = createAsyncThunk('session/creatSession', async (name: string) => {
  await axios
    .post(`http://192.168.5.127:7300/video_device/all/session`, {
      name: name,
    })
    .catch((err) => alert(err.message));

  await axios.get('http://192.168.5.127:7300/videos/all/video/info?sessionId=all');

  const response = await axios
    .get('http://192.168.5.127:7300/video_device/all/session/-1/updated')
    .then((res) => res.data);

  return response;
});

export const updateSession = createAsyncThunk('session/updateSession', async () => {
  await axios.get('http://192.168.5.127:7300/videos/all/video/info?sessionId=all');

  const response = await axios
    .get('http://192.168.5.127:7300/video_device/all/session/-1/updated')
    .then((res) => res.data);

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
      })

      .addCase(updateSession.pending, (state) => {
        state.pending = true;
      })
      .addCase(updateSession.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.session = payload;
      })
      .addCase(updateSession.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const sessionActive = (state: RootState) => state.session;

export default sessionSlice.reducer;
