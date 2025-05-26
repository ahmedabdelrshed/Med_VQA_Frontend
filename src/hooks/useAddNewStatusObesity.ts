import { useForm } from "react-hook-form";
import { ObesityData, ObesityDataRequest } from "../Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModel } from "../utils/modelsFuns";

import { obesitySchema } from "../validations/obesitySchema";
import { useNewStatusObesityMutation } from "../store/Obesity/obesityApi";
import toast from "react-hot-toast";
const useAddNewStatusObesity = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
        trigger,
    } = useForm<ObesityData>({
        resolver: yupResolver(obesitySchema),
        shouldUnregister: true,
        defaultValues: {
            Height: '',
            Weight: '',
            family_history: '',
            FAVC: '',
            FCVC: '',
            NCP: '',
            CAEC: '',
            SMOKE: '',
            CH2O: '',
            SCC: '',
            FAF: '',
            TUE: '',
            CALC: '',
            MTRANS: '',
        },
    });
    const [newStatusObesity, { isLoading }] = useNewStatusObesityMutation();
    const onSubmit = async (data: ObesityData) => {
        try {
            const requestData: ObesityDataRequest = {
                Height: Number(data.Height)/100,
                Weight: Number(data.Weight),
                family_history: data.family_history,
                FAVC: data.FAVC,
                FCVC: Number(data.FCVC),
                NCP: Number(data.NCP),
                CAEC: data.CAEC,
                SMOKE: data.SMOKE,
                CH2O: Number(data.CH2O),
                SCC: data.SCC,
                FAF: Number(data.FAF),
                TUE: Number(data.TUE),
                CALC: data.CALC,
                MTRANS: data.MTRANS,
            };
            await newStatusObesity(requestData)
                .unwrap()
                .then(() => {
                    handleClose();
                    toast.success("Obesity status assigned successfully!");
                });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClose = () => {
        closeModel("NewObesityModal");
        clearErrors();
        reset();
    };
    return {
        register,
        handleSubmit,
        errors,
        isLoading,
        onSubmit,
        handleClose,
        trigger,
    }
}

export default useAddNewStatusObesity