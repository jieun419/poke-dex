import { createSlice } from '@reduxjs/toolkit';

interface StateT {
  scrollNum: number;
}

const initialState: StateT = {
  scrollNum: 20,
};

const infinityScrollSlice = createSlice({
  name: 'infinityScroll',
  initialState,
  reducers: {
    scrollUpdate(state, actions) {
      if (actions.payload) {
        state.scrollNum = 20 + state.scrollNum;
      }
    },
    scrollReset(state) {
      state.scrollNum = 20;
    },
  },
});

export const infinityScrollReducer = infinityScrollSlice.reducer;
export const infinityScrollActions = infinityScrollSlice.actions;
