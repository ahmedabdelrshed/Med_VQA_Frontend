import { useForm } from "react-hook-form";
import { BloodSugarData, BloodSugarDataRequest } from "../Types";
import { yupResolver } from "@hookform/resolvers/yup";
import bloodSugarSchema from "../validations/bloodSugarSchema";
import { useNewStatusMutation } from "../store/BloodSugar/bloodSugarApi";
import toast from "react-hot-toast";
import { closeModel } from "../utils/modelsFuns";

const useAddNewStatusBloodSugar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm<BloodSugarData>({
        resolver: yupResolver(bloodSugarSchema),
        defaultValues: {
            bloodSugar: "",
            diabetesStatus: "",
            timeOfMeasurement: "",
            symptoms: "",
            medicationTaken: "",
            physicalActivity: "",
            lastMealTime: "",
        },
    });
    const [newStatus, { isLoading }] = useNewStatusMutation();

    const onSubmit = async (data: BloodSugarData) => {
        try {
            const requestData: BloodSugarDataRequest = {
                blood_sugar: Number(data.bloodSugar),
                diabetes_status: data.diabetesStatus,
                time_of_measurement: data.timeOfMeasurement,
                symptoms: data.symptoms,
                medication_taken: data.medicationTaken,
                physical_activity: data.physicalActivity,
                last_meal_time: data.lastMealTime,
            };
            await newStatus(requestData)
                .unwrap()
                .then(() => {
                    handleClose();
                    toast.success("Blood sugar status assigned successfully!");
                });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClose = () => {
        closeModel("assignNewStatusModal    ");
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
    }
}

export default useAddNewStatusBloodSugar