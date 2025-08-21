import { baseUrlApi } from "@/redux/api/baseUrlApi";

const projectServiceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getTheService: build.query({
      query: (token) => ({
        url: "/services",
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

    // all project
    getAllProject: build.query({
      query: () => ({
        url: `/projects/all`,
        method: "get",
      }),
    }),

    // signle project
    getSignleProject: build.query({
      query: (projectId) => ({
        url: `/projects/public/${projectId}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetTheServiceQuery,
  useGetAllProjectQuery,
  useGetSignleProjectQuery,
} = projectServiceApi;
