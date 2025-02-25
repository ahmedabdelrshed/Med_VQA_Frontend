import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../validations/registerSchema";
import { IRegister } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router";
import actAuthRegister from "../store/auth/act/actAuthRegister";

const useRegister = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { error, loading } = useAppSelector(state => state.auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegister>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IRegister> = async (data) => {
        await dispatch(actAuthRegister(data)).unwrap().then(() => {
            navigate('/confirmEmail')
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

export default useRegister;