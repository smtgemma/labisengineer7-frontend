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
      providesTags: ["Credit"],
    }),
    useCredits: build.mutation({
      query: (payload) => {
        return {
          url: "/credits/use-credits",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Credit"],
    }),



  }),
});

export const { useGetCreditServiceQuery, useRemainingCreditQuery, useUseCreditsMutation } = creditApi;
