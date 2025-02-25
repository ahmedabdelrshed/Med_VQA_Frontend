import { createSlice } from "@reduxjs/toolkit";
import actAuthLogin from "./act/actAuthLogin";

interface IAuthState {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    } | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}
const initialState: IAuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actAuthLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export default authSlice.reducer;