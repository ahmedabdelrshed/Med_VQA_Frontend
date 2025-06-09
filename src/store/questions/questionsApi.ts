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
        getQuestions: builder.query<{ data: TQuestion[] }, string>({
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
        addQuestion: builder.mutation<void, { chatId: string; body: FormData }>({
            query: ({ chatId, body }) => ({
                url: `/question/questionImage/${chatId}`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "questions", id: "LIST" }],
        }),
        addQuestionSymptoms: builder.mutation<void, { chatId: string; body: {symptoms: string[]} }>({
            query: ({ chatId, body }) => ({
                url: `/question/questionSymptoms/${chatId}`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "questions", id: "LIST" }],
        })
        , deleteQuestion: builder.mutation({
            query: (id: string) => ({
                url: `/question/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "questions", id: "LIST" }],
        }),
        updateQuestion: builder.mutation({
            query: ({ id, body }: { id: string; body: { question: string } }) => ({
                url: `/question/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: [{ type: "questions", id: "LIST" }],
        }),
    }),
    keepUnusedDataFor: 0
});

export const { useGetQuestionsQuery, useAddQuestionMutation, useDeleteQuestionMutation, useUpdateQuestionMutation,useAddQuestionSymptomsMutation } =
    questionsApi;