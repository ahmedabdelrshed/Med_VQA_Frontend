import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TChat } from "../../Types";
import { RootState } from "../store";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
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
  tagTypes: ["chats"],
  endpoints: (builder) => ({
    getChats: builder.query<{ data: TChat[] }, void>({
      query: () => ({
        url: `/chat`,
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({
                type: "chats" as const,
                id: _id,
              })),
              { type: "chats" as const, id: "LIST" },
            ]
          : [{ type: "chats" as const, id: "LIST" }],
    }),
    createChat: builder.mutation<{ data: TChat }, void>({
      query: () => ({
        url: `/chat`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "chats" as const, id: "LIST" }],
    }),
    deleteChat: builder.mutation({
      query: (id: string) => ({
        url: `/chat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "chats" as const, id: "LIST" }],
    }),
    updateChat: builder.mutation({
      query: ({ id, body }: { id: string; body: { title: string } }) => ({
        url: `/chat/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "chats" as const, id: "LIST" }],
    }),
    shareChat: builder.mutation({
      query: (id: string) => ({
        url: `/chat/share/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetChatsQuery,
  useCreateChatMutation,
  useDeleteChatMutation,
  useUpdateChatMutation,
  useShareChatMutation,
} = chatAPI;
