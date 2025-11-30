import { configureStore } from "@reduxjs/toolkit";
import { cakeApi } from "./api/cakeApi";
import { adminApi } from "./api/adminApi";
import { mailerApi } from "./api/mailerApi";
import modalReducer from "./slices/modalSlice";
import cakeReducer from "./slices/cakeDataSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    modalType: modalReducer,
    cakeData: cakeReducer,
    auth: authReducer,
    [cakeApi.reducerPath]: cakeApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [mailerApi.reducerPath]: mailerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cakeApi.middleware)
      .concat(adminApi.middleware)
      .concat(mailerApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
