import { createSlice } from "@reduxjs/toolkit"

interface IChatSlice {
    deleteChatID: string
    updatedChat: {
        id: string,
        title: string
    }
}

const initialState: IChatSlice = {
    deleteChatID: "",
    updatedChat: {
        id: "",
        title: ""
    }
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
        }
    }
})

export default chatSlice.reducer
export const { setDeleteChatID, setUpdatedChat } = chatSlice.actions
