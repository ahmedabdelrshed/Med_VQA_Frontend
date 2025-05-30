import { useForm } from "react-hook-form";
import { HealthyData } from "../Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModel } from "../utils/modelsFuns";
import { healthSchema } from "../validations/healthySchema";
import { useNewStatusHealthyMutation } from "../store/healthy/healthyApi";
import toast from "react-hot-toast";
const useAddNewStatusHealthy = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
        trigger,
    } = useForm<HealthyData>({
        resolver: yupResolver(healthSchema),
        shouldUnregister: true,
        defaultValues: {
            is_smoker: '',
            activity_level: '',
            has_diabetes: '',
            has_hypertension: '',
            has_heart_disease: '',
            height_cm: '',
            weight_kg: '',
        },
    });
    const [newStatusHealthy, { isLoading }] = useNewStatusHealthyMutation();
    const onSubmit = async (data: HealthyData) => {
        console.log(data)
        try {
            const requestData = {
                height_cm: Number(data.height_cm),
                weight_kg: Number(data.weight_kg),
                has_diabetes: data.has_diabetes === "Yes" ? 1 : 0,
                has_hypertension: data.has_hypertension === "Yes" ? 1 : 0,
                has_heart_disease: data.has_heart_disease === "Yes" ? 1 : 0,
                is_smoker: data.is_smoker === "Yes" ? 1 : 0,
                activity_level: data.activity_level,
            };

            await newStatusHealthy(requestData)
                .unwrap()
                .then(() => {
                    handleClose();
                    toast.success("Healthy status assigned successfully!");
                });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClose = () => {
        closeModel("NewHealthyModal");
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

export default useAddNewStatusHealthy