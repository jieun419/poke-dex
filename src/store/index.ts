import { configureStore } from '@reduxjs/toolkit';
import { infinityScrollReducer } from './infinityScroll-slice';
import { themeReducer } from './theme-slice';
import { overlayMadalReducer } from './overlayModal-slice';
import { searchKeyWordReducer } from './searchPokeList-slice';

const store = configureStore({
  reducer: {
    infinityScroll: infinityScrollReducer,
    themeType: themeReducer,
    overlayMoal: overlayMadalReducer,
    searchKeyWord: searchKeyWordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
