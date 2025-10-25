import { baseUrlApi } from "@/redux/api/baseUrlApi";

const OtAndPropsApi = baseUrlApi.injectEndpoints({
    endpoints: (build) => ({
        getOtAndProp: build.query({
            query: (kaek) => ({
                url: `http://31.97.37.168:8019/api/v1/kaek_lookup?kaek=${kaek}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetOtAndPropQuery, useLazyGetOtAndPropQuery } = OtAndPropsApi;
