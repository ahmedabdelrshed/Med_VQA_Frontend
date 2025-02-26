import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actAuthLogin from "../store/auth/act/actAuthLogin";
import { useNavigate } from "react-router";
import emailSchema from "../validations/emailSchema";
type TResetPassword = {
    email: string
}
const useResetPassword = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const {error,loading} = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TResetPassword>({
        resolver: yupResolver(emailSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<ILogin> = async (data) => {
        await dispatch(actAuthLogin(data)).unwrap().then(() => {
            navigate('/')
        })
    };
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