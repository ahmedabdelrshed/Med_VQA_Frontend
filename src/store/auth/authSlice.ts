import { createSlice } from "@reduxjs/toolkit";
import actAuthLogin from "./act/actAuthLogin";
import actAuthRegister from "./act/actAuthRegister";
import actForgetPassword from "./act/actForgetPassword";
import actChangePassword from "./act/actChangePassword";
import actResendVerifyEmail from "./act/actResendVerifyEmail";
import actConfirmVerifyEmail from "./act/actConfirmVerifyEmail";
import Cookies from "js-cookie";
import calExpiresDate from "../../utils/decodedToken";
import actUpdateUser from "../user/act/actUpdateUser";
import actDelProfileImage from "../user/act/actDelProfileImage";


interface IAuthState {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        avatar: string;
    };
    token: string | null;
    loading: boolean;
    error: string | null;
}
const initialState: IAuthState = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
    },
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserEmail: (state, payload) => {
            state.user.email = payload.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token;
        },
        resetUi: (state) => {
            state.error = null
            state.loading = false
        },
        actLogout: (state) => {
            state.user = {
                id: 0,
                email: "",
                firstName: "",
                lastName: "",
                avatar: ""
            };
            state.token = null;
            Cookies.remove("token");
            Cookies.remove("user");

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
            const expireDay = calExpiresDate(state.token)
            Cookies.set("token", action.payload.token, { expires: expireDay });
            Cookies.set("user", JSON.stringify(action.payload.user), { expires: expireDay });
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
        // Confirm Verify Email
        builder.addCase(actConfirmVerifyEmail.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actConfirmVerifyEmail.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actConfirmVerifyEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        // Update User
        builder.addCase(actUpdateUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actUpdateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.updatedUser;
            const expire = calExpiresDate(state.token as string)
            Cookies.set("user", JSON.stringify(action.payload.updatedUser), { expires: expire });
        });
        builder.addCase(actUpdateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        // Delete Profile Image
        builder.addCase(actDelProfileImage.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(actDelProfileImage.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(actDelProfileImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export default authSlice.reducer;
export const { setUserEmail, setUser, actLogout, resetUi } = authSlice.actions;