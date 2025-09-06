import { baseUrlApi } from "@/redux/api/baseUrlApi";

const aiServiceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    // pdf to iamge converter
    pdfToImageCoverter: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/convert-pdf-to-images",
        method: "POST",
        body: formData,
      }),
    }),

    // pdf to iamge converter
    imageToPdfCoverter: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/convert-multiple-images-to-pdf",
        method: "POST",
        body: formData,
      }),
    }),
    // pdf to auto naming converter
    pdfPackageAutoName: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/process-pdfs",
        method: "POST",
        body: formData,
      }),
    }),
    // pdf to pdf merge
    pfdToFdfMerge: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/merge-pdfs",
        method: "POST",
        body: formData,
      }),
    }),
    postFileAiDataExtract: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/process-documents-advanced",
        method: "POST",
        body: formData,
      }),
    }),
    // second service
    postSecondFileAiDataExtract: build.mutation({
      query: (formData) => ({
        url: "http://31.97.37.168:8019/api/v1/process-documents-advanced-three",
        method: "POST",
        body: formData,
      }),
    }),

    posAiAllDataSave: build.mutation({
      query: ({ formData, accessToken }) => ({
        url: "/projects/create-with-files",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  usePdfToImageCoverterMutation,
  usePostFileAiDataExtractMutation,
  useImageToPdfCoverterMutation,
  usePdfPackageAutoNameMutation,
  usePfdToFdfMergeMutation,
  usePosAiAllDataSaveMutation,
  usePostSecondFileAiDataExtractMutation,
} = aiServiceApi;
