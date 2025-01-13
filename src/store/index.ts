import { configureStore } from '@reduxjs/toolkit';
import { infinityScrollReducer } from './infinityScroll-slice';
import { themeReducer } from './theme-slice';
import { overlayMadalReducer } from './overlayModal-slice';
import { searchKeyWordReducer } from './searchPokeList-slice';
import { languageReducer } from './language-slice';

const store = configureStore({
  reducer: {
    infinityScroll: infinityScrollReducer,
    themeType: themeReducer,
    overlayModal: overlayMadalReducer,
    searchKeyWord: searchKeyWordReducer,
    languageType: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
