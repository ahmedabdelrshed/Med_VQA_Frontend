import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "../interfaces";
import loginSchema from "../validations/loginSchema";

const useLogin = () => {
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
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    }
}

export default useLogin;