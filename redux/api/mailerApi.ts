import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MailerResponse {
  success: boolean;
  error?: string;
}

export const mailerApi = createApi({
  reducerPath: "mailerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation<MailerResponse, FormData>({
      query: (formData) => ({
        url: "/api/mailer",
        method: "POST",
        body: formData
      }),
    }),
  }),
});

export const { useSendEmailMutation } = mailerApi;
