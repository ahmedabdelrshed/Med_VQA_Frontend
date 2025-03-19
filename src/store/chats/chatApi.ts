import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie";
import { TChat } from '../../Types';


export const chatAPI = createApi({
    reducerPath: "chatAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://med-vqa-backend.vercel.app', headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    }
    )
    , tagTypes: ["chats"],
    endpoints: (builder) => ({
        getChats: builder.query<{ data: TChat[] }, void>({
            query: () => ({
                url: `/chat`
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                        ...result.data.map(({ _id }) => ({ type: "chats" as const, id: _id })),
                        { type: "chats" as const, id: "LIST" },
                    ]
                    : [{ type: "chats" as const, id: "LIST" }],
        }),
        createChat: builder.mutation<{ data: TChat }, void>({
            query: () => ({
                url: `/chat`,
                method: 'POST',
            }),
            invalidatesTags: [
                { type: "chats" as const, id: "LIST" }
            ]
        }),
        deleteChat: builder.mutation({
            query: (id: string) => ({
                url: `/chat/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: "chats" as const, id: "LIST" }]
        })
    })
})

export const { useGetChatsQuery, useCreateChatMutation, useDeleteChatMutation } = chatAPI