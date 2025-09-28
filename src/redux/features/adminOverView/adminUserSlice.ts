import { baseUrlApi } from "@/redux/api/baseUrlApi";

const adminUserApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUserStatus: build.query({
      query: () => ({
        url: "/admin/summary",
        method: "get",
      }),
    }),

    // update status and account spent
    userStatusChange: build.mutation({
      query: ({ id, token }) => ({
        url: `/admin/suspend/${id}`,
        method: "PATCH",
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
      query: () => ({
        url: `/admin`,
        method: "get",
      }),
    }),

    // submit logs account
    getAllsubmissionLogs: build.query({
      query: (token) => ({
        url: `/admin/logs`,
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
      query: () => ({
        url: `/admin/last-7-days`,
        method: "get",
      }),
    }),

    // the get activity feed data
    getActivityFeedData: build.query({
      query: () => ({
        url: `/admin/getFeedBack`,
        method: "get",
      }),
    }),
    // AI/API Monitoring
    getMonitoringMertricsData: build.query({
      query: () => ({
        url: `/admin/aiMonitoring`,
        method: "get",
      }),
    }),

    getAiStatusCard: build.query({
      query: () => ({
        url: `/admin/aimonitoringSummary`,
        method: "get",
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
  useGetMonitoringMertricsDataQuery,
  useGetAiStatusCardQuery,
  useGetActivityFeedDataQuery,
} = adminUserApi;
