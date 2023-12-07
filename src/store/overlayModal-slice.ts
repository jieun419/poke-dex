import { createSlice } from '@reduxjs/toolkit';

interface StateT {
  modalState: boolean;
  id: string;
}

const initialState: StateT = {
  modalState: false,
  id: '',
};

const overlayMadalSlice = createSlice({
  name: 'overlayMadal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.modalState = !state.modalState;
    },
    // openModal(state) {
    //   state.modalState = true;
    // },
    // closeModal(state) {
    //   state.modalState = false;
    // },
    idSave(state, action) {
      state.id = action.payload;
    },
  },
});

export const overlayMadalReducer = overlayMadalSlice.reducer;
export const overlayMadalActions = overlayMadalSlice.actions;
