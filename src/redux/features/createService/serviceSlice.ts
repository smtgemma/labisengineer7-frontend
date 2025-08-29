import { baseUrlApi } from "@/redux/api/baseUrlApi";

const serviceApi = baseUrlApi.injectEndpoints({
  overrideExisting: true,
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

    updateService: build.mutation({
      query: ({ id, formData, token }) => ({
        url: `/services/update-service/${id}`,
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    // delete api working
    deleteService: build.mutation({
      query: ({ id, token }) => ({
        url: `/services/delete-service/${id}`,
        method: "delete",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),

    getServiceTemplate: build.query({
      query: ({ id, token }) => ({
        url: `/services/${id}`,
        method: "get",
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

export const {
  useCreateServicePostMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useGetServiceTemplateQuery,
} = serviceApi;
