import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IVideoDevice } from '../../shared/types/videoDeviceTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  devices: IVideoDevice[] | null;
  pending: boolean;
  error: boolean;
};

const initialState: videoDeviceState = {
  devices: null,
  pending: false,
  error: false,
};

export const getVideoDevice = createAsyncThunk('videoDevice/getVideoDevice', async () => {
  const response = await axios
    .get('http://192.168.5.127:7300/video_device/saved')
    .then((resp) => resp.data)
    .catch((err) => console.log(err));

  return response;
});

export const deleteVideoDevice = createAsyncThunk(
  'videoDevice/deleteVideoDevice',
  async (id?: number) => {
    await axios.delete(`http://192.168.5.127:7300/video_device/${id}`).then(function () {});
  },
);

export const videoDeviceSlice = createSlice({
  name: 'videoDevice',
  initialState,
  reducers: {
    changeSelected: (state, action: PayloadAction<{ selected: boolean; id: number }>) => {
      if (state.devices)
        state.devices = state.devices.map((el) =>
          el.id === action.payload.id ? { ...el, selected: action.payload.selected } : el,
        );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideoDevice.pending, (state) => {
        state.pending = true;
      })
      .addCase(getVideoDevice.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.devices = payload;
        // if (state.devices) state.devices = state.devices.map((el) => ({ ...el, selected: false }));
      })
      .addCase(getVideoDevice.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })

      .addCase(deleteVideoDevice.fulfilled, (state) => {
        state.pending = false;
        state.devices = null;
        state.error = false;
      });
  },
});

export const { changeSelected } = videoDeviceSlice.actions;

export const videoDevice = (state: RootState) => state.videoDevice;

export default videoDeviceSlice.reducer;
