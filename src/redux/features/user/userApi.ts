import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (payload) => ({
        url: "/users/create-admin",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = userApi;
