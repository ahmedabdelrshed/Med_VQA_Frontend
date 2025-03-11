import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TResetPassword } from "../../../hooks/useForgetPassword";
import toast from "react-hot-toast";

const actResendVerifyEmail = createAsyncThunk(
  "auth/resendVerifyEmail",
  async (data:TResetPassword, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await axiosInstance.post("/auth/resendVerification", data);
      toast.success('Verification Email Send Success')
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actResendVerifyEmail;
