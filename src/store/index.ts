import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { infinityScrollReducer } from './infinityScroll-slice';
import { themeReducer } from './theme-slice';

const store = configureStore({
  reducer: {
    infinityScroll: infinityScrollReducer,
    themeType: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
