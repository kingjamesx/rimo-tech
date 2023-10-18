import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  value: boolean;
};

const initialState = {
  value: false,
} as ModalState;

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal:(state)=>{
        state.value=false
    },
    openModal: (state) => {
      state.value =true;
    },
  },
});

export const {
 closeModal,
 openModal
} = modal.actions;
export default modal.reducer;