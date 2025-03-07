import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import Cookies from "js-cookie";
import { TUserUpdated } from "../../../Types";

const actUpdateUser = createAsyncThunk(
    "auth/update_user",
    async (data: TUserUpdated, thunk) => {
        const { rejectWithValue } = thunk;
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        if (data.password) {
            formData.append("password", data.password);
        }
        if (data.oldPassword) {
            formData.append("oldPassword", data.oldPassword);
        }
        if (data.file) {
            formData.append("avatar", data.file);
        }
        try {
            const res = await axiosInstance.patch("/user/update", formData,
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

export default actUpdateUser;
