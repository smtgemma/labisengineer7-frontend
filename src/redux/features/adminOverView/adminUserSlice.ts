import { baseUrlApi } from "@/redux/api/baseUrlApi";

const adminUserApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUserStatus: build.query({
      query: () => ({
        url: "/users",
        method: "get",
      }),
    }),
  }),
});

export const { useGetAllUserStatusQuery } = adminUserApi;
