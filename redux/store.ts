import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import { pizzaApi } from "./api/pizzaApi";

export const store = configureStore({
  reducer: {
    modalType: modalReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
