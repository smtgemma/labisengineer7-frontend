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

    // delete account
    getAllUserDashboard: build.query({
      query: (token) => ({
        url: `/ai/dashboard`,
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    // submit logs account
    getAllsubmissionLogs: build.query({
      query: (token) => ({
        url: `/ai/logs`,
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    getMyDocumentPoint: build.query({
      query: (token) => ({
        url: `/services/`,
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    getMetricsData: build.query({
      query: (token) => ({
        url: `/ai/usage-graph`,
        method: "get",
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
  useGetAllUserDashboardQuery,
  useGetMyDocumentPointQuery,
  useGetAllsubmissionLogsQuery,
  useGetMetricsDataQuery,
} = adminUserApi;
