import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PizzaType } from "@/app/page";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    getPizzas: builder.query<PizzaType[], void>({
      query: () => "/api/pizzas",
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;
