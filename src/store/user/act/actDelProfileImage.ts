import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import Cookies from "js-cookie";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

const actDelProfileImage = createAsyncThunk(
  "auth/deleteProfileImage",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axiosInstance.delete("/user/deleteImage",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actDelProfileImage;
