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

    resetPassword: build.mutation({
      query: (resetData) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: resetData,
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

export const { useProfileUpdateMutation } = userProfileApi;
