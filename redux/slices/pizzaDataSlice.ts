import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType } from "@/app/page";

interface PizzaState {
  pizzaData: PizzaType[];
  sortedPizzas: PizzaType[];
  sortValue: string;
}

const initialState: PizzaState = {
  pizzaData: [],
  sortedPizzas: [],
  sortValue: "",
};

export const pizzaSlice = createSlice({
  name: "pizzaData",
  initialState,
  reducers: {
    setPizzaData: (state, action: PayloadAction<PizzaType[]>) => {
      state.pizzaData = action.payload;
      state.sortedPizzas = [...action.payload]; 
    },
    setSortedPizzas: (state, action: PayloadAction<PizzaType[]>) => {
      state.sortedPizzas = [...action.payload]; 
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    }
  },
});

export const { setPizzaData, setSortedPizzas, setSortValue } = pizzaSlice.actions;
export default pizzaSlice.reducer;
