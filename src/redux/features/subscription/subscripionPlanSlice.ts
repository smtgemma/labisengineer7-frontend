import { baseUrlApi } from "@/redux/api/baseUrlApi";

const subscriptionPlanApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getThePlan: build.query({
      query: () => ({
        url: "/plans/getPlans",
        method: "get",
      }),
    }),

    //  create Subscirption Plans
    createSubscirptionPlans: build.mutation({
      query: ({ planIdData, accessToken }) => ({
        url: `/subscriptions/create-subscription`,
        method: "POST",
        body: planIdData,
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    //  create bulling information Plans
    createBllingIngfo: build.mutation({
      query: ({ data, accessToken }) => ({
        url: `/subscriptions/createBilling`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    // get builing history
    getBuilingHistory: build.query({
      query: () => ({
        url: "/subscriptions/billing-info",
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetThePlanQuery,
  useCreateSubscirptionPlansMutation,
  useCreateBllingIngfoMutation,
  useGetBuilingHistoryQuery,
} = subscriptionPlanApi;
