import { createSlice } from "@reduxjs/toolkit";

interface ModalType {
  value: string | null;
}

const initialState: ModalType = {
  value: null,
};

const modalSlice = createSlice({
  name: "modalType",
  initialState,
  reducers: {
    pizzaOrder: (state) => {
      state.value = "pizzaOrder";
    },
    pizzaDetails: (state) => {
      state.value = "pizzaDetails";
    },
    closeModal: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { pizzaOrder, pizzaDetails, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
