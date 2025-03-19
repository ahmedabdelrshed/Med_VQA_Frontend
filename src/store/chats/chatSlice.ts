import { createSlice } from "@reduxjs/toolkit"

interface IChatSlice {
    deleteChatID: string
}

const initialState: IChatSlice = {
    deleteChatID: ""
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setDeleteChatID: (state, action) => {
            state.deleteChatID = action.payload
        }
    }
})

export default chatSlice.reducer
export const { setDeleteChatID } = chatSlice.actions
