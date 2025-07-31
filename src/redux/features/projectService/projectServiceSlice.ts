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
    // userStatusChange: build.mutation({
    //   query: ({ id, token }) => ({
    //     url: `/users/suspend/${id}`,
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `${token}`,
    //     },
    //   }),
    // }),
  }),
});

export const { useGetTheServiceQuery } = projectServiceApi;
