import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICamera } from '../../shared/types/videoDeviceTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  cameras: ICamera[];
};

const initialState: videoDeviceState = {
  cameras: [],
};

export const camerasSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    changeActiveCameras: (state, action: PayloadAction<ICamera[]>) => {
      state.cameras = action.payload;
    },
  },
});

export const { changeActiveCameras } = camerasSlice.actions;

export const camerasActive = (state: RootState) => state.cameras;

export default camerasSlice.reducer;
