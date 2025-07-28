import { baseUrlApi } from "@/redux/api/baseUrlApi";

const aiServiceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    // pdf to iamge converter
    pdfToImageCoverter: build.mutation({
      query: (formData) => ({
        url: "http://172.252.13.69:8019/api/v1/convert-pdf-to-images",
        method: "POST",
        body: formData,
      }),
    }),
    postFileAiDataExtract: build.mutation({
      query: (formData) => ({
        url: "http://172.252.13.69:5008/api/v1/format",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  usePdfToImageCoverterMutation,
  usePostFileAiDataExtractMutation,
} = aiServiceApi;
