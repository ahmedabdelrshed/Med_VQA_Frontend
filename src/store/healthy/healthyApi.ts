import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { HealthyDataRequest } from "../../Types";

interface Prediction {
    health_tier: string;
    createdAt: string;
    activity_level: string;
    has_diabetes: boolean;
    has_heart_disease: boolean;
    has_hypertension: boolean;
    height_cm: number;
    is_smoker: boolean;
    weight_kg: number;
}
export const healthyApi = createApi({
    reducerPath: "healthyApi",
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
    tagTypes: ["prediction-healthy"],
    endpoints: (builder) => ({
        getHealthyStatus: builder.query<{ data: Prediction }, void>({
            query: () => ({
                url: `/api/health/health-record`,
            }),
            providesTags: ['prediction-healthy'],
        }),
        newStatusHealthy: builder.mutation<{ body: HealthyDataRequest }, HealthyDataRequest>({
            query: (body: HealthyDataRequest) => ({
                url: `/api/health/health-record`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['prediction-healthy'],
        }),


    }),
});

export const {
    useGetHealthyStatusQuery, useNewStatusHealthyMutation } = healthyApi;
