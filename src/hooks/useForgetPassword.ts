import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router";
import emailSchema from "../validations/emailSchema";
import actForgetPassword from "../store/auth/act/actForgetPassword";
import { resetUi, setUserEmail } from "../store/auth/authSlice";
import { useEffect } from "react";
export type TResetPassword = {
    email: string
}
const useResetPassword = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { error, loading } = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TResetPassword>({
        resolver: yupResolver(emailSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<TResetPassword> = async (data) => {
        const { email } = data;
        dispatch(setUserEmail(email))
        await dispatch(actForgetPassword(data)).unwrap().then(() => {
            navigate('/reset_password_email')
        })
    };
    useEffect(() => {
        return () => {
            dispatch(resetUi());
        };
    }, [dispatch]);
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        error,
        loading,
    }
}

export default useResetPassword;