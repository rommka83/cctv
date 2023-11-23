import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import videoDeviceReducer from './slices/videoDeviceSlice';

export const store = configureStore({
  reducer: {
    videoDevice: videoDeviceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
