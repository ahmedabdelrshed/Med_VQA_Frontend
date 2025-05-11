import * as yup from "yup";
import { DIABETES_STATUS, LAST_MEAL_TIME, MEDICATION_TAKEN, PHYSICAL_ACTIVITY, SYMPTOMS, TIME_OF_MEASUREMENT } from "../utils/bloodSugarValues";

const bloodSugarSchema = yup
    .object({
        bloodSugar: yup
            .string() 
                .required("Blood sugar level is required")
                .test(
                    "is-number",
                    "Blood sugar must be a number",
                    (value) => !isNaN(Number(value))
                )
                .test(
                    "is-valid-range",
                    "Blood sugar must be between 30 and 600",
                    (value) => {
                        const num = Number(value);
                        return !isNaN(num) && num >= 30 && num <= 600;
                    }
                ),
        diabetesStatus: yup
            .string()
            .required("Diabetes status is required")
            .oneOf(DIABETES_STATUS, "Please select a valid diabetes status"),
        timeOfMeasurement: yup
            .string()
            .required("Time of measurement is required")
            .oneOf(TIME_OF_MEASUREMENT, "Please select a valid time of measurement"),
        symptoms: yup
            .string()
            .required("Symptoms selection is required")
            .oneOf(SYMPTOMS, "Please select valid symptoms"),
        medicationTaken: yup
            .string()
            .required("Medication information is required")
            .oneOf(MEDICATION_TAKEN, "Please select valid medication"),
        physicalActivity: yup
            .string()
            .required("Physical activity level is required")
            .oneOf(PHYSICAL_ACTIVITY, "Please select a valid activity level"),
        lastMealTime: yup
            .string()
            .required("Last meal time is required")
            .oneOf(LAST_MEAL_TIME, "Please select a valid meal time"),
    })
    .required();
// export type BloodSugarSchema = yup.InferType<typeof bloodSugarSchema>;
export default bloodSugarSchema;


