import { useEffect, useState } from "react";
import axiosErrorHandler from "../utils/axiosErrorHandler";
import axiosInstance from "../config/axios.config";
import { resetUi } from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";


const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
        useState<null | string>();

    const [enteredEmail, setEnteredEmail] = useState<null | string>(null);
    const dispatch = useAppDispatch()
    const checkEmailAvailability = async (email: string) => {
        setEnteredEmail(email);
        setEmailAvailabilityStatus("checking...");
        try {
            const response = await axiosInstance.post(`/auth/checkEmail`, { email: email });
            if (!response.data.status) {
                setEmailAvailabilityStatus("");
            } else {
                setEmailAvailabilityStatus("User already Exists");
            }
        } catch (error) {
            setEmailAvailabilityStatus(`Failed ${axiosErrorHandler(error)}`);
        }
    };

    const resetCheckEmailAvailability = () => {
        setEmailAvailabilityStatus(null);
        setEnteredEmail(null);
    };
    useEffect(() => {
        return () => {
            dispatch(resetUi());
        };
    }, [dispatch]);
    return {
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability,
    };
};
export default useCheckEmailAvailability;