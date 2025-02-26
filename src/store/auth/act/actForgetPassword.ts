import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TResetPassword } from "../../../hooks/useForgetPassword";

const actForgetPassword = createAsyncThunk(
  "auth/forget_Password",
  async (data:TResetPassword, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await axiosInstance.post("/user/forgetPassword", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actForgetPassword;
