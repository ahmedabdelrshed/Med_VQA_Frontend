import { createSlice } from "@reduxjs/toolkit";

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
    reducers:{}
})

export default authSlice.reducer;