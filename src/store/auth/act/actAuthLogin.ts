import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../../../Types";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { AxiosError } from "axios";

type TResponse = {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        avatar: string;
    };
    token: string;
};


const actAuthLogin = createAsyncThunk('auth/login', async (data: ILogin, thunk) => {
    const { rejectWithValue } = thunk
    try {
        const res = await axiosInstance.post<TResponse>('/auth/login', data)
        return res.data
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.status === 403) {
                const modal = document.getElementById("VerifyEmailModal") as HTMLDialogElement | null;
                modal?.showModal();
            }
        }
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actAuthLogin;