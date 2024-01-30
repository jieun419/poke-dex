import { createSlice } from '@reduxjs/toolkit';
import { PokeListT } from '../types/types';

type initialStateT = {
  keyWord: string;
  pokeData: PokeListT[];
};

const initialState: initialStateT = {
  keyWord: '',
  pokeData: [],
};

const searchKeyWordSlice = createSlice({
  name: 'searchKeyWord',
  initialState,
  reducers: {
    getSearchKeyWord(state, actions) {
      state.keyWord = actions.payload;
    },
    getSearchPokeData(state, actions) {
      state.pokeData.push(...actions.payload.filter((el: PokeListT) => el.name.includes(state.keyWord)));
    },
  },
});

export const searchKeyWordReducer = searchKeyWordSlice.reducer;
export const searchKeyWordActions = searchKeyWordSlice.actions;
