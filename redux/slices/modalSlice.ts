import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType } from "@/app/page";

export type ModalValue = "pizzaAdd" | "pizzaDetails" | "pizzaEdit" | "pizzaOrder" | null;

interface ModalState {
  value: ModalValue;
  selectedPizza?: PizzaType;
}

const initialState: ModalState = {
  value: null,
  selectedPizza: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    pizzaAdd: (state, action: PayloadAction<PizzaType | undefined>) => {
      state.value = "pizzaAdd";
      state.selectedPizza = action.payload;
    },
    pizzaDetails: (state, action: PayloadAction<PizzaType | undefined>) => {
      state.value = "pizzaDetails";
      state.selectedPizza = action.payload;
    },
    pizzaEdit: (state, action: PayloadAction<PizzaType | undefined>) => {
      state.value = "pizzaEdit";
      state.selectedPizza = action.payload;
    },
    pizzaOrder: (state, action: PayloadAction<PizzaType | undefined>) => {
      state.value = "pizzaOrder";
      state.selectedPizza = action.payload;
    },
    closeModal: (state) => {
      state.value = null;
      state.selectedPizza = undefined;
    },
  },
});

export const { pizzaAdd, pizzaDetails, pizzaEdit, pizzaOrder, closeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
