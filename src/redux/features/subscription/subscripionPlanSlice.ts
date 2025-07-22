import { baseUrlApi } from "@/redux/api/baseUrlApi";

const subscriptionPlanApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getThePlan: build.query({
      query: () => ({
        url: "/plans/getPlans",
        method: "get",
      }),
    }),

    // create subscription
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
      query: ({ BllingData, accessToken }) => ({
        url: `/subscriptions/createBilling`,
        method: "POST",
        body: BllingData,
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetThePlanQuery,
  useCreateSubscirptionPlansMutation,
  useCreateBllingIngfoMutation,
} = subscriptionPlanApi;
