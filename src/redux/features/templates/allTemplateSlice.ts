import { baseUrlApi } from "@/redux/api/baseUrlApi";

const allTemplatesApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getOwnerTemplate: build.query<any, string>({   
      query: (id) => ({
        url: `/projects/${id}/templete-two`,    
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOwnerTemplateQuery } = allTemplatesApi;
