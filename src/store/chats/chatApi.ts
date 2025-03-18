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
    ,
    endpoints: (builder) => ({
        getChats: builder.query<{ data: TChat[] }, void>({
            query: () => ({
                url: `/chat`
            })
        })
    })
})

export const { useGetChatsQuery } = chatAPI