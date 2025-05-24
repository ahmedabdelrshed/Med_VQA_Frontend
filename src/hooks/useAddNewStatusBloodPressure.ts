import { useForm } from "react-hook-form";
import { BloodPressureData } from "../Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModel } from "../utils/modelsFuns";
import { bloodPressureSchema } from "../validations/bloodPressureSchema";
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
    // const [newStatus, { isLoading }] = useNewStatusMutation();
    const isLoading = false;
    const onSubmit = async (data: BloodPressureData) => {
        try {
            console.log(data)
            // await newStatus(requestData)
            //     .unwrap()
            //     .then(() => {
            //         handleClose();
            //         toast.success("Blood sugar status assigned successfully!");
            //     });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClose = () => {
        closeModel("assignNewStatusModal");
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