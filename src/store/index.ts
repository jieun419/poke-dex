import { configureStore } from '@reduxjs/toolkit';
import { infinityScrollReducer } from './infinityScroll-slice';
import { themeReducer } from './theme-slice';
import { overlayMadalReducer } from './overlayModal-slice';

const store = configureStore({
  reducer: {
    infinityScroll: infinityScrollReducer,
    themeType: themeReducer,
    overlayMoal: overlayMadalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
