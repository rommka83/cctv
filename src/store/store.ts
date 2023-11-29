import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import camerasReducer from './slices/camerasSlice';
import sessionReducer from './slices/sessionSlice';
import videoDeviceReducer from './slices/videoDeviceSlice';

export const store = configureStore({
  reducer: {
    videoDevice: videoDeviceReducer,
    session: sessionReducer,
    cameras: camerasReducer,
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
