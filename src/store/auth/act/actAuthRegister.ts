import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegister } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

const actAuthRegister = createAsyncThunk(
  "auth/register",
  async (data: IRegister, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await axiosInstance.post("/auth/register", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;
