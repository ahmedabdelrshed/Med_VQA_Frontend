import { createSlice } from "@reduxjs/toolkit";
import actAuthLogin from "./act/actAuthLogin";
import actAuthRegister from "./act/actAuthRegister";
import actForgetPassword from "./act/actForgetPassword";
import actChangePassword from "./act/actChangePassword";
import actResendVerifyEmail from "./act/actResendVerifyEmail";

interface IAuthState {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    };
    token: string | null;
    loading: boolean;
    error: string | null;
}
const initialState: IAuthState = {
    user: {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
    },
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserEmail: (state, payload) => {
            state.user.email = payload.payload;
        }
    },
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
        // Register
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actAuthRegister.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        // Forget Password
        builder.addCase(actForgetPassword.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actForgetPassword.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actForgetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        //  Change password
        builder.addCase(actChangePassword.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actChangePassword.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actChangePassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        // Resend Verification Email
        builder.addCase(actResendVerifyEmail.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actResendVerifyEmail.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actResendVerifyEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

    }
})

export default authSlice.reducer;
export const { setUserEmail } = authSlice.actions;