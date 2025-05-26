import { useForm } from "react-hook-form";
import { BloodPressureData, BloodPressureDataRequest } from "../Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModel } from "../utils/modelsFuns";
import { bloodPressureSchema } from "../validations/bloodPressureSchema";
import { useNewStatusBloodMutation } from "../store/bloodPressure/bloodPressureApi";
import toast from "react-hot-toast";
const useAddNewStatusBloodPressure = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
        trigger,
    } = useForm<BloodPressureData>({
        resolver: yupResolver(bloodPressureSchema),
        shouldUnregister: true,
        defaultValues: {
            SMOKING_STATUS: '',
            PHYSICAL_ACTIVITY_LEVEL: "",
            KNOWN_MEDICAL_CONDITIONS: "",
            STRESS_LEVEL: "",
            SYMPTOMS_NOW: "",
            HISTORY_OF_HIGH_BP: "",
            Diastolic_BP: "",
            Systolic_BP: "",
            Heart_Rate_BPM: "",
            Height_cm: "",
            Weight_kg: "",
        },
    });
    const [newStatusBlood, { isLoading }] = useNewStatusBloodMutation();
    const onSubmit = async (data: BloodPressureData) => {
        try {
            const requestData: BloodPressureDataRequest = {
                Smoking_Status: data.SMOKING_STATUS,
                Physical_Activity_Level: data.PHYSICAL_ACTIVITY_LEVEL,
                Known_Medical_Conditions: data.KNOWN_MEDICAL_CONDITIONS,
                Stress_Level: data.STRESS_LEVEL,
                Symptoms_Now: data.SYMPTOMS_NOW,
                History_of_High_BP: data.HISTORY_OF_HIGH_BP,
                Diastolic_BP: Number(data.Diastolic_BP),
                Systolic_BP: Number(data.Systolic_BP),
                Heart_Rate_BPM: Number(data.Heart_Rate_BPM),
                Height_cm: Number(data.Height_cm),
                Weight_kg: Number(data.Weight_kg),
            };
            await newStatusBlood(requestData)
                .unwrap()
                .then(() => {
                    handleClose();
                    toast.success("Blood Pressure status assigned successfully!");
                });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClose = () => {
        closeModel("NewBloodPressureModal");
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

export default useAddNewStatusBloodPressure