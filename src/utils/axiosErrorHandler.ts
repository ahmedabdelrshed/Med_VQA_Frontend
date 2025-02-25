import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data || error.response?.data.error || error.message
    );
  } else {
    return "An unexpected error";
  }
};

export default axiosErrorHandler;