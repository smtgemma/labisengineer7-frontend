import { baseUrlApi } from "@/redux/api/baseUrlApi";

const myDocumnetApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getMyDocuments: build.query({
      query: (token) => ({
        url: "/documents/my-documents",
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const { useGetMyDocumentsQuery } = myDocumnetApi;
