import { baseUrlApi } from "@/redux/api/baseUrlApi";

const allTemplatesApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getOwnerTemplate: build.query({
      query: (ownerId) => ({
        url: `/projects/${ownerId}/templete-two`,
        method: "GET",
      }),
    }),

    updateProject: build.mutation({
      query: (formData) => ({
        url: `/projects/update-project/68c6caf9921ea3bd8cfbce22/68b7e435fd763c4900a0d139`,
        method: "PATCH",
        body: formData,
      }),
    }),

    downloadTemplatePdf: build.query({
      query: () => ({
        url: `/templates/get-pdf-zip`,
        method: "GET",
      }),
    }),

    ExeclDownloadTemplate: build.query({
      query: () => ({
        url: `/templates/get-excel-zip`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetOwnerTemplateQuery,
  useUpdateProjectMutation,
  useDownloadTemplatePdfQuery,
  useExeclDownloadTemplateQuery,
} = allTemplatesApi;
