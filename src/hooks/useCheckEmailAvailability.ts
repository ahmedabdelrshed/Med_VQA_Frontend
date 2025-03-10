import { useState } from "react";
import axiosErrorHandler from "../utils/axiosErrorHandler";
import axiosInstance from "../config/axios.config";


const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
        useState<null | string>();

    const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

    const checkEmailAvailability = async (email: string) => {
        setEnteredEmail(email);
        setEmailAvailabilityStatus("checking...");
        try {
            const response = await axiosInstance.post(`/auth/checkEmail`, { email: email });
            if (!response.data.status) {
                setEmailAvailabilityStatus("Available ✅");
            } else {
                setEmailAvailabilityStatus("Not Available");
            }
        } catch (error) {
            setEmailAvailabilityStatus(`Failed ${axiosErrorHandler(error)}`);
        }
    };

    const resetCheckEmailAvailability = () => {
        setEmailAvailabilityStatus(null);
        setEnteredEmail(null);
    };

    return {
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability,
    };
};
export default useCheckEmailAvailability;