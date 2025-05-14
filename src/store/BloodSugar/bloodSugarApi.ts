import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BloodSugarDataRequest, Prediction } from "../../Types";
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
        getBloodSugarResults: builder.query<{ data: Prediction[] }, { startDate: string, endDate: string }>({
            query: ({ startDate, endDate }: { startDate: string, endDate: string }) => ({
                url: `/api/sugarPatient/getPredictions?startDate=${startDate}&endDate=${endDate}`,
            }),
            providesTags: ['predictions'],
        }),
        newStatus: builder.mutation<{ body: BloodSugarDataRequest }, BloodSugarDataRequest>({
            query: (body: BloodSugarDataRequest) => ({
                url: `/api/sugarPatient/analyzeSugar`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['predictions'],
        }),

    }),
});

export const {
    useGetBloodSugarResultsQuery,
    useNewStatusMutation
} = bloodSugarAPI;
