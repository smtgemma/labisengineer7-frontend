import Cookies from "js-cookie";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrlApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.buildai.gr/api/v1",
    baseUrl: "https://mc999nnm-8145.inc1.devtunnels.ms/api/v1",
    // baseUrl: "https://api.buildai.gr/api/v1",
    // prepareHeaders: (headers) => {
    //   const token = Cookies.get("accessToken");
    //   if (token) {
    //     headers.set("Authorization", `${token}`);
    //   }
    //   return headers;
    // },
    prepareHeaders: (headers) => {
      const token = Cookies.get("accessToken");
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },

  }),
  tagTypes: ["Credit", "Templates"],
  endpoints: () => ({}),
});
