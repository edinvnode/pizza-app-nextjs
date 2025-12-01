import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CakeType } from "@/app/page";

export const cakeApi = createApi({
  reducerPath: "cakeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["cake"],
  endpoints: (builder) => ({
    getCakes: builder.query<
      { items: CakeType[]; nextCursor: string | null },
      { cursor?: string; limit?: number }
    >({
      query: ({ cursor, limit = 10 }) =>
        `api/cakes?limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`,
      providesTags: ["cake"],
    }),

    addCake: builder.mutation<CakeType, FormData>({
      query: (formData) => ({
        url: "/api/cakes",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["cake"],
    }),

    deleteCake: builder.mutation<void, { id: number; sortedBy?: string }>({
      query: ({ id, sortedBy }) => ({
        url: `/api/cakes/${id}${
          sortedBy ? `?sortedBy=${encodeURIComponent(sortedBy)}` : ""
        }`,
        method: "DELETE",
      }),
      invalidatesTags: ["cake"],
    }),

    editCake: builder.mutation<CakeType, { id: number; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/api/cakes/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["cake"],
    }),
  }),
});

export const {
  useGetCakesQuery,
  useAddCakeMutation,
  useDeleteCakeMutation,
  useEditCakeMutation,
} = cakeApi;
