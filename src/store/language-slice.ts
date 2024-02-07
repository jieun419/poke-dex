import { createSlice } from '@reduxjs/toolkit';

type initialStateT = {
  languageMode: string;
};
const toggleLanguageMode = localStorage.getItem('LANGUAGE');

const initialState: initialStateT = {
  languageMode: toggleLanguageMode ? toggleLanguageMode : 'en',
};

const languageSlice = createSlice({
  name: 'languagetype',
  initialState,
  reducers: {
    toggleEnMode(state) {
      state.languageMode = 'en';
    },
    toggleKrMode(state) {
      state.languageMode = 'ko';
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;
