import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "../interfaces";
import loginSchema from "../validations/loginSchema";
import { useAppDispatch } from "../store/hooks";
import actAuthLogin from "../store/auth/act/actAuthLogin";

const useLogin = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<ILogin>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        console.log("Form Data:", data);
        dispatch(actAuthLogin(data))
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    }
}

export default useLogin;