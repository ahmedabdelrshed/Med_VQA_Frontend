import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import passwordSchema from "../validations/passwordSchema";
import actChangePassword from "../store/auth/act/actChangePassword";
import { useState } from "react";
export type TChangePassword = {
    password: string
    confirmPassword: string
    token?: string
}
const useChangePassword = ({ token }: { token: string }) => {
    const dispatch = useAppDispatch()
    const [success, setSuccess] = useState(false)
    const { error, loading } = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TChangePassword>({
        resolver: yupResolver(passwordSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<TChangePassword> = async (data) => {
        const passwordData = {
            ...data,
            token: token
        }
        await dispatch(actChangePassword(passwordData)).unwrap().then(() => {
            setSuccess(true)
        })
    };
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        error,
        loading,
        success
    }
}

export default useChangePassword;