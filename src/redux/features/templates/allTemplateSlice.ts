import { baseUrlApi } from "@/redux/api/baseUrlApi";

const allTemplatesApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getOwnerTemplate: build.query({
      query: (ownerId) => ({
        url: `/projects/${ownerId}/templete-two`,
        method: "GET",
      }),
    }),

    downloadTemplatePdf: build.query({
      query: () => ({
        url: `https://mc999nnm-8145.inc1.devtunnels.ms/api/v1/templates/get-pdf-zip`,
        method: "GET",
      }),
    }),

    ExeclDownloadTemplate: build.query({
      query: () => ({
        url: `https://mc999nnm-8145.inc1.devtunnels.ms/api/v1/templates/get-excel-zip`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetOwnerTemplateQuery,
  useDownloadTemplatePdfQuery,
  useExeclDownloadTemplateQuery,
} = allTemplatesApi;
