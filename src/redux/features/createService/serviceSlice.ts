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
    getTemplateData: build.query({
      query: () => ({
        url: "/projects/689c3040b3aacee891a60175/templete-two",
        method: "get",
      }),
    }),
  }),
});

export const { useCreateServicePostMutation, useGetTemplateDataQuery } =
  serviceApi;
