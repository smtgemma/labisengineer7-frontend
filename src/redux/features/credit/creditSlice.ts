import { baseUrlApi } from "@/redux/api/baseUrlApi";

const creditApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getCreditService: build.query({
      query: (id) => ({
        url: `/features/getAllFeatures/${id}`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetCreditServiceQuery } = creditApi;
