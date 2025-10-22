/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetOtAndPropQuery } from "@/redux/features/newVariabls/FetchNewVariables.";


export interface DetailedCategoryData {
    ot: string;
    prop: string;
    isLoading: boolean;
    error: any;
    refetch: () => void;
}

export const useCategoriesDetailed = (kaek: string): DetailedCategoryData => {
    const {
        data,
        isLoading,
        error,
        refetch,
    } = useGetOtAndPropQuery(kaek);

    const ot = data?.OT_NUM || "";
    const prop = data?.PROP_HOR || "";
    return {
        ot,
        prop,
        isLoading,
        error,
        refetch,
    };
};
