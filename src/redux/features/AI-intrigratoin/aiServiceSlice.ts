import { baseUrlApi } from "@/redux/api/baseUrlApi";

const aiServiceApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    postFileAiDataExtract: build.mutation({
      query: (formData) => ({
        url: "http://172.252.13.69:5008/api/v1/format",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { usePostFileAiDataExtractMutation } = aiServiceApi;
