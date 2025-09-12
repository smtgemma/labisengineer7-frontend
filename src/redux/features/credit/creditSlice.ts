import { baseUrlApi } from "@/redux/api/baseUrlApi";

const creditApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getCreditService: build.query({
      query: (id) => ({
        url: `/features/getAllFeatures/${id}`,
        method: "GET",
      }),
    }),
    remainingCredit: build.query({
      query: () => ({
        url: `/features/remaining-credits`,
        method: "GET",
      }),
    }),
    useCredits: build.mutation({
      query: (data: any) => ({
        url: `/credits/use-credits`,
        method: "POST",
        data: { totalCredits: data }
      }),
    }),


  }),
});

export const { useGetCreditServiceQuery, useRemainingCreditQuery, useUseCreditsMutation } = creditApi;
