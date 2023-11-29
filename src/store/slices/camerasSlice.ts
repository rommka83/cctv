import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICamera } from '../../shared/types/videoDeviceTypes';
import { RootState } from '../store';

export type videoDeviceState = {
  data: ICamera[];
};

const initialState: videoDeviceState = {
  data: [],
};

export const camerasSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    changeActiveCameras: (state, action: PayloadAction<ICamera[]>) => {
      state.data = action.payload;
    },
  },
});

export const { changeActiveCameras } = camerasSlice.actions;

export const camerasActive = (state: RootState) => state.cameras;

export default camerasSlice.reducer;
