import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "../Types";
import loginSchema from "../validations/loginSchema";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actAuthLogin from "../store/auth/act/actAuthLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { resetUi, setUserEmail } from "../store/auth/authSlice";
import { useEffect } from "react";

const useLogin = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { error, loading } = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    });
    useEffect(() => {
        if (error) {
            toast.error(error, {
                duration: 1000,
            });
            dispatch(resetUi());
        }
    }, [error, dispatch]);
    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        dispatch(setUserEmail(data.email))
        await dispatch(actAuthLogin(data)).unwrap().then(() => {
            toast.success('Login successful')
            setTimeout(() => {
                navigate('/')
            }, 1000)
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

export default useLogin;