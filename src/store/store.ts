import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { chatAPI } from './chats/chatApi'
import chatReducer from './chats/chatSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [chatAPI.reducerPath]: chatAPI.reducer,
        chat: chatReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(chatAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch