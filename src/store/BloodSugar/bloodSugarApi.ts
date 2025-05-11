import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PredictionDiabetes } from "../../Types";
import { RootState } from "../store";

export const bloodSugarAPI = createApi({
    reducerPath: "bloodSugarAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://med-vqa-backend.vercel.app",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["predictions"],
    endpoints: (builder) => ({
        getBloodSugarResults: builder.query<{ data: PredictionDiabetes[] }, { startDate: string, endDate: string }>({
            query: ({ startDate, endDate }: { startDate: string, endDate: string }) => ({
                url: `/api/sugarPatient/getPredictions?startDate=${startDate}&endDate=${endDate}`,
            }),
            //   providesTags: (result) =>
            //     result?.data
            //       ? [
            //           ...result.data.map(({ _id }) => ({
            //             type: "predictions" as const,
            //             id: _id,
            //           })),
            //           { type: "predictions" as const, id: "LIST" },
            //         ]
            //       : [{ type: "predictions" as const, id: "LIST" }],
        }),
        // createChat: builder.mutation<{ data: TChat }, void>({
        //     query: () => ({
        //         url: `/chat`,
        //         method: "POST",
        //     }),
        //     //   invalidatesTags: [{ type: "predictions" as const, id: "LIST" }],
        // }),

    }),
});

export const {
    useGetBloodSugarResultsQuery,

} = bloodSugarAPI;
