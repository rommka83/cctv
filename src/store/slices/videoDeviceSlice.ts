import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IVideoDevice } from '../../shared/types/videoDeviceTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  data: IVideoDevice | null;
  pending: boolean;
  error: boolean;
};

const initialState: videoDeviceState = {
  data: null,
  pending: false,
  error: false,
};

export const getVideoDevice = createAsyncThunk('videoDevice/getVideoDevice', async () => {
  const response = await axios.post('http://192.168.5.127:7300/video_device', {
    body: 'http://192.168.5.127:7301',
  });
  console.log('dd');

  return response.data;
});

// TODO: удаление по id
export const deleteVideoDevice = createAsyncThunk('videoDevice/deleteVideoDevice', async () => {
  await axios.delete('http://192.168.5.127:7300/video_device/257').then(function () {});
});

export const videoDeviceSlice = createSlice({
  name: 'videoDevice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoDevice.pending, (state) => {
        state.pending = true;
      })
      .addCase(getVideoDevice.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getVideoDevice.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })

      .addCase(deleteVideoDevice.fulfilled, (state) => {
        state.pending = false;
        state.data = null;
        state.error = false;
      });
  },
});

export const videoDevice = (state: RootState) => state.videoDevice;

export default videoDeviceSlice.reducer;
