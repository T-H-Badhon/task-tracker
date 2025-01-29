import { baseApi } from "./baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    // get user profile by token
    getUserProfileByToken: builder.query({
      query: () => {
        return {
          url: '/auth/profile-by-token',
          method: 'post'
        };
      }
    })

  }),
});

export const { useLoginMutation,useRegisterMutation, useGetUserProfileByTokenQuery } = authApi;