import { createSlice } from "@reduxjs/toolkit"

interface IQuestionSlice {
    deleteQuestionID: string
    updatedQuestion: {
        id: string,
        question: string
    }
}

const initialState: IQuestionSlice = {
    deleteQuestionID: "",
    updatedQuestion: {
        id: "",
        question: ""
    }
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setDeleteQuestionID: (state, action) => {
            state.deleteQuestionID = action.payload
        },
        setUpdatedQuestion: (state, action) => {
            state.updatedQuestion = action.payload
        }
    }
})

export default questionSlice.reducer
export const { setDeleteQuestionID, setUpdatedQuestion } = questionSlice.actions
