import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CakeType } from "@/app/page";

export type ModalValue =
  | "cakeAdd"
  | "cakeDetails"
  | "cakeEdit"
  | "cakeOrder"
  | null;

interface ModalState {
  value: ModalValue;
  selectedCake?: CakeType;
}

const initialState: ModalState = {
  value: null,
  selectedCake: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    cakeAdd: (state, action: PayloadAction<CakeType | undefined>) => {
      state.value = "cakeAdd";
      state.selectedCake = action.payload;
    },
    cakeDetails: (state, action: PayloadAction<CakeType | undefined>) => {
      state.value = "cakeDetails";
      state.selectedCake = action.payload;
    },
    cakeEdit: (state, action: PayloadAction<CakeType | undefined>) => {
      state.value = "cakeEdit";
      state.selectedCake = action.payload;
    },
    cakeOrder: (state, action: PayloadAction<CakeType | undefined>) => {
      state.value = "cakeOrder";
      state.selectedCake = action.payload;
    },
    closeModal: (state) => {
      state.value = null;
      state.selectedCake = undefined;
    },
  },
});

export const { cakeAdd, cakeDetails, cakeEdit, cakeOrder, closeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
