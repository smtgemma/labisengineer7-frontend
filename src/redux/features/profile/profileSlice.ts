import { baseUrlApi } from "@/redux/api/baseUrlApi";

const userProfileApi = baseUrlApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    profileUpdate: build.mutation({
      query: ({ formData, token }) => ({
        url: "/users/user-update",
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    updatePassword: build.mutation({
      query: ({ body, token }) => ({
        url: "/auth/change-password",
        method: "PUT",
        body,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    postEngreerInfo: build.mutation({
      query: ({ formData, token }) => ({
        url: "/users/update-engineer",
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    // get engreening vlaue
    getTheEngreer: build.query({
      query: (token) => ({
        url: `/users/getEngineer`,
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const {
  useProfileUpdateMutation,
  useUpdatePasswordMutation,
  usePostEngreerInfoMutation,
  useGetTheEngreerQuery,
} = userProfileApi;
