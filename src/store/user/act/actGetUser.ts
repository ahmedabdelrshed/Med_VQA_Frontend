// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../config/axios.config";
// import Cookies from "js-cookie";
// import axiosErrorHandler from "../../utils/axiosErrorHandler";

// type IGetUser = {
//     userId : string
// }
// const actGetUser = createAsyncThunk(
//   "auth/getUser",
//   async (data:IGetUser, thunk) => {
//       const { rejectWithValue } = thunk;
//     try {
//         const res = await axiosInstance.get("/user/getUser", data,
//           {
//             headers: {
//               Authorization: `Bearer ${Cookies.get("token")}`,
//             },
//           }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(axiosErrorHandler(error));
//     }
//   }
// );

// export default actGetUser;
