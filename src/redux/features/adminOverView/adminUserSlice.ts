import { baseUrlApi } from "@/redux/api/baseUrlApi";

const adminUserApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUserStatus: build.query({
      query: (token) => ({
        url: "/users",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // update status and account spent
    userStatusChange: build.mutation({
      query: ({ id, token }) => ({
        url: `/users/suspend/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    // delete account
    userDelete: build.mutation({
      query: ({ id, token }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllUserStatusQuery,
  useUserStatusChangeMutation,
  useUserDeleteMutation,
} = adminUserApi;
