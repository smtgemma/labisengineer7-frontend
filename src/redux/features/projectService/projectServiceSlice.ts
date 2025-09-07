import { baseUrlApi } from "@/redux/api/baseUrlApi";

const projectServiceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getTheService: build.query({
      query: () => ({
        url: "/services",
        method: "get",
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
      query: (token) => ({
        url: `projects/my-projects`,
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    // signle project
    getSignleProject: build.query({
      query: (projectId) => ({
        url: `/projects/public/${projectId}`,
        method: "get",
      }),
    }),

    // update status and account spent
    projectDelete: build.mutation({
      query: ({ id, token }) => ({
        url: `/projects/${id}`,
        method: "delete",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetTheServiceQuery,
  useGetAllProjectQuery,
  useGetSignleProjectQuery,
  useProjectDeleteMutation,
} = projectServiceApi;
