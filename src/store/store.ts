import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { chatAPI } from './chats/chatApi'
import chatReducer from './chats/chatSlice'
import { questionsApi } from './questions/questionsApi'
import { bloodSugarAPI } from './BloodSugar/bloodSugarApi'
import { bloodPressureAPI } from './bloodPressure/bloodPressureApi'
import { obesityApi } from './Obesity/obesityApi'
import { healthyApi } from './healthy/healthyApi'
import questionReducer from './questions/questionSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [chatAPI.reducerPath]: chatAPI.reducer,
        chat: chatReducer,
        [questionsApi.reducerPath]: questionsApi.reducer,
        question: questionReducer,
        [bloodSugarAPI.reducerPath]: bloodSugarAPI.reducer,
        [bloodPressureAPI.reducerPath]: bloodPressureAPI.reducer,
        [obesityApi.reducerPath]: obesityApi.reducer,
        [healthyApi.reducerPath]: healthyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(chatAPI.middleware).concat(questionsApi.middleware).concat(bloodSugarAPI.middleware)
            .concat(bloodPressureAPI.middleware).concat(obesityApi.middleware).concat(healthyApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch