import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface Prediction {
    predictionResult: string;
    reportPdfUrl: string;
    date: string;
}
export const obesityApi = createApi({
    reducerPath: "obesityApi",
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
    tagTypes: ["prediction-obesity"],
    endpoints: (builder) => ({
        getObesityLevel: builder.query<{ data: Prediction },void>({
            query: () => ({
                url: `/api/obesity/getReports`,
            }),
            providesTags: ['prediction-obesity'],
        }),


    }),
});

export const {
    useGetObesityLevelQuery } = obesityApi;
