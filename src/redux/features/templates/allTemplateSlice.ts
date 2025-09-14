// import { baseUrlApi } from "@/redux/api/baseUrlApi";

// const allTemplatesApi = baseUrlApi.injectEndpoints({
//   endpoints: (build) => ({
//     getOwnerTemplate: build.query({
//       query: (ownerId) => ({
//         url: `/projects/${ownerId}/templete-two`,
//         method: "GET",
//       }),

//     }),

//     updateProject: build.mutation({
//       query: (formData) => ({
//         url: `/projects/update-project/68c6d478921ea3bd8cfbce24/68b7e435fd763c4900a0d139`,
//         method: "PATCH",
//         body: formData,
//       }),
//     }),

//     downloadTemplatePdf: build.query({
//       query: () => ({
//         url: `/templates/get-pdf-zip`,
//         method: "GET",
//       }),
//     }),

//     ExeclDownloadTemplate: build.query({
//       query: () => ({
//         url: `/templates/get-excel-zip`,
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetOwnerTemplateQuery,
//   useUpdateProjectMutation,
//   useDownloadTemplatePdfQuery,
//   useExeclDownloadTemplateQuery,
// } = allTemplatesApi;


import { baseUrlApi } from "@/redux/api/baseUrlApi";

const allTemplatesApi = baseUrlApi.injectEndpoints({
  endpoints: (build) => ({
    getOwnerTemplate: build.query({
      query: (ownerId) => ({
        url: `/projects/${ownerId}/templete-two`,
        method: "GET",
      }),
      providesTags: ["Templates"], // 👈 provides cache
    }),

    // updateProject: build.mutation({
    //   query: (projectId, userId, formData) => ({
    //     url: `/projects/update-project/${projectId}/${userId}`,
    //     method: "PATCH",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["Templates"], // 👈 invalidate the same tag
    // }),

    updateProject: build.mutation({
      query: ({ projectId, userId, formData }) => ({
        url: `/projects/update-project/${projectId}/${userId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Templates"], // ✅ invalidate cache
    }),

    downloadTemplatePdf: build.query({
      query: () => ({
        url: `/templates/get-pdf-zip`,
        method: "GET",
      }),
      providesTags: ["Templates"],
    }),

    ExeclDownloadTemplate: build.query({
      query: () => ({
        url: `/templates/get-excel-zip`,
        method: "GET",
      }),
      providesTags: ["Templates"],
    }),
  }),
});

export const {
  useGetOwnerTemplateQuery,
  useUpdateProjectMutation,
  useDownloadTemplatePdfQuery,
  useExeclDownloadTemplateQuery,
} = allTemplatesApi;

