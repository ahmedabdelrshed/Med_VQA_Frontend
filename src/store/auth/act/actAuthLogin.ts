import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

type TResponse = {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    };
    token: string;
};


const actAuthLogin = createAsyncThunk('auth/login', async (data: ILogin, thunk) => {
    const { rejectWithValue } = thunk
    try {
        const res = await axiosInstance.post<TResponse>('/auth/login', data)
        return res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actAuthLogin;