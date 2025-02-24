import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../validations/registerSchema";
import { IRegister } from "../interfaces";

const useRegister = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<IRegister>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IRegister> = (data) => {
        console.log("Form Data:", data);
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    }
}

export default useRegister;