import { baseUrlApi } from "@/redux/api/baseUrlApi";

const userProfileApi = baseUrlApi.injectEndpoints({
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

    // all project
    // getAllProject: build.query({
    //   query: () => ({
    //     url: `/projects/all`,
    //     method: "get",
    //   }),
    // }),
  }),
});

export const { useProfileUpdateMutation, useUpdatePasswordMutation } =
  userProfileApi;
