import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TChangePassword } from "../../../hooks/useChangePassword";

const actChangePassword = createAsyncThunk(
  "auth/change_Password",
  async (passwordData:TChangePassword, thunk) => {
      const { rejectWithValue } = thunk;
      const data = {
        newPassword: passwordData.password
      };
    try {
        const res = await axiosInstance.post("/user/reset-password", data,
          {
            headers: {
              Authorization: `Bearer ${passwordData.token}`,
            },
          }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actChangePassword;
