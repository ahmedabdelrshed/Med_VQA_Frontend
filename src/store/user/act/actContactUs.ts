import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { IContact } from "../../../Types";

const actContactUs = createAsyncThunk(
  "auth/contact_us",
  async (data:IContact, thunk) => {
      const { rejectWithValue } = thunk;
    try {
        const res = await axiosInstance.post("/user/contactUs", data,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actContactUs;
