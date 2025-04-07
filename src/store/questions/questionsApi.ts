import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { TQuestion } from "../../Types";

export const questionsApi = createApi({
    reducerPath: "questionAPI",
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
    tagTypes: ["questions"],
    endpoints: (builder) => ({
        getQuestions: builder.query<{ data: TQuestion[] },string>({
            query: (id: string) => ({
                url: `/chat/${id}`,
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                        ...result.data.map(({ _id }) => ({
                            type: "questions" as const,
                            id: _id,
                        })),
                        { type: "questions" as const, id: "LIST" },
                    ]
                    : [{ type: "questions" as const, id: "LIST" }],
        }),
    })
})

export const { useGetQuestionsQuery } = questionsApi