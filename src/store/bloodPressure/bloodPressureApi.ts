import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  Prediction } from "../../Types";
import { RootState } from "../store";

export const bloodPressureAPI = createApi({
    reducerPath: "bloodPressureAPI",
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
    tagTypes: ["predictions_blood"],
    endpoints: (builder) => ({
        getBloodPressureResults: builder.query<{ data: Prediction[] }, { startDate: string, endDate: string }>({
            query: ({ startDate, endDate }: { startDate: string, endDate: string }) => ({
                url: `/api/bloodPressurePatient/getPredictions?startDate=${startDate}&endDate=${endDate}`,
            }),
            providesTags: ['predictions_blood'],
        }),
        

    }),
});

export const {
    useGetBloodPressureResultsQuery,
} = bloodPressureAPI;
