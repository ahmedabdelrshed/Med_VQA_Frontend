import { createSlice } from "@reduxjs/toolkit"
import { set } from "react-hook-form"

interface IChatSlice {
    deleteChatID: string
    updatedChat: {
        id: string,
        title: string
    }
    shareChatLink: string
}

const initialState: IChatSlice = {
    deleteChatID: "",
    updatedChat: {
        id: "",
        title: ""
    },
    shareChatLink: ""
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setDeleteChatID: (state, action) => {
            state.deleteChatID = action.payload
        },
        setUpdatedChat: (state, action) => {
            state.updatedChat = action.payload
        },
        setShareChatLink: (state, action) => {
            state.shareChatLink = action.payload
        }
    }
})

export default chatSlice.reducer
export const { setDeleteChatID, setUpdatedChat ,setShareChatLink} = chatSlice.actions
