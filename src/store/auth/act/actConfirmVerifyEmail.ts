import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

const actConfirmVerifyEmail = createAsyncThunk(
  "auth/confirmVerifyEmail",
  async (token:{token:string}, thunk) => {
      const { rejectWithValue } = thunk;
      console.log(token)
    
    try {
        const res = await axiosInstance.get("/user/emailVerification",
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actConfirmVerifyEmail;
