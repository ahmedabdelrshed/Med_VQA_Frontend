import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../validations/registerSchema";
import { IRegister } from "../Types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router";
import actAuthRegister from "../store/auth/act/actAuthRegister";
import { setUserEmail } from "../store/auth/authSlice";
import useCheckEmailAvailability from "./useCheckEmailAvailability";
import toast from "react-hot-toast";

const useRegister = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { error, loading } = useAppSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        getFieldState,
        trigger,
        formState: { errors },
    } = useForm<IRegister>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur",
    });
    const {
        checkEmailAvailability,
        emailAvailabilityStatus,
        enteredEmail,
        resetCheckEmailAvailability,
    } = useCheckEmailAvailability();

    const onSubmit: SubmitHandler<IRegister> = async (data) => {
        if (emailAvailabilityStatus === "Available ✅") {
            dispatch(setUserEmail(data.email));
            await dispatch(actAuthRegister(data))
                .unwrap()
                .then(() => {
                    toast.success(" Registration successful ")
                    setTimeout(() => {
                        navigate("/confirmEmail");
                    },1000)
                });
        }
    };

    const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        const value = e.target.value;
        const { isDirty, invalid } = getFieldState("email");

        if (isDirty && !invalid && enteredEmail !== value) {
            // checking
            checkEmailAvailability(value);
        }

        if (isDirty && invalid && enteredEmail) {
            resetCheckEmailAvailability();
        }
    };
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        error,
        loading,
        emailAvailabilityStatus,
        emailOnBlurHandler,
    };
};

export default useRegister;
