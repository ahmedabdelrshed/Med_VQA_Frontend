import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TResetPassword } from "../../../hooks/useForgetPassword";

const actResendVerifyEmail = createAsyncThunk(
  "auth/resendVerifyEmail",
  async (data:TResetPassword, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await axiosInstance.post("/auth/resendVerification", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actResendVerifyEmail;
