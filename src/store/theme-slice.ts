import { createSlice } from '@reduxjs/toolkit';

type initialStateT = {
  themeMode: string;
};
const toggleThemeMode = localStorage.getItem('THEME');

const initialState: initialStateT = {
  themeMode: toggleThemeMode ? toggleThemeMode : 'light',
};

const themeSlice = createSlice({
  name: 'themetype',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.themeMode = 'dark';
    },
    toggleLightMode(state) {
      state.themeMode = 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
