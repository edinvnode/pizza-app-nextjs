import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🧩 Types
export interface AdminData {
  email: string;
  role: "admin";
}

export interface LoginResponse extends AdminData {
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// 🧠 Admin API
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include", // ensures cookies (like JWT) are sent
  }),
  tagTypes: ["Admin"],

  endpoints: (builder) => ({
    // ✅ Verify session / fetch current admin
    getAdmin: builder.query<AdminData, void>({
  query: () => ({
    url: "/api/admin",
    method: "GET",
    credentials: "include",
  }),
  providesTags: ["Admin"],
}),

    // ✅ Login as admin
    loginAdmin: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/api/admin", // same endpoint, POST
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"], // triggers getAdmin refetch
    }),

    // Logout as admin
    logoutAdmin: builder.mutation<{ message: string }, void>({
  query: () => ({
    url: "/api/admin",
    method: "DELETE",
  }),
  invalidatesTags: ["Admin"], // <-- triggers cache invalidation
}),
  }),
});

export const {
  useGetAdminQuery,
  useLoginAdminMutation,
  useLogoutAdminMutation, // optional
} = adminApi;
