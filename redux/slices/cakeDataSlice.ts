import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CakeType } from "@/app/page";

interface CakeState {
  cakeData: CakeType[];
  sortedCakes: CakeType[];
  sortValue: string;
}

const initialState: CakeState = {
  cakeData: [],
  sortedCakes: [],
  sortValue: "",
};

export const cakeSlice = createSlice({
  name: "CakeData",
  initialState,
  reducers: {
    setCakeData: (state, action: PayloadAction<CakeType[]>) => {
      state.cakeData = action.payload;
      state.sortedCakes = [...action.payload]; 
    },
    setSortedCakes: (state, action: PayloadAction<CakeType[]>) => {
      state.sortedCakes = [...action.payload]; 
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      state.sortValue = action.payload;
    }
  },
});

export const { setCakeData, setSortedCakes, setSortValue } = cakeSlice.actions;
export default cakeSlice.reducer;
