import { baseUrlApi } from "@/redux/api/baseUrlApi";

const serviceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    createServicePost: build.mutation({
      query: ({ formData, token }) => ({
        url: "/services/create-service",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const { useCreateServicePostMutation } = serviceApi;
