import * as yup from "yup";
import { generalHealthyValues } from "../utils/healthyValues";

export const healthSchema = yup.object({
    height_cm: yup
        .string()
        .required("Height is required")
        .typeError("Height must be a number")
        .test("is-number", "Height must be a number", value => !isNaN(Number(value)))
        .test("is-valid-range", "Height must be between 100 and 250 cm", value => {
            const num = Number(value);
            return num >= 100 && num <= 250;
        }),

    weight_kg: yup
        .string()
        .required("Weight is required")
        .typeError("Weight must be a number")
        .test("is-number", "Weight must be a number", value => !isNaN(Number(value)))
        .test("is-valid-range", "Weight must be between 30 and 300 kg", value => {
            const num = Number(value);
            return num >= 30 && num <= 300;
        }),

    has_diabetes: yup
        .string()
        .required("Has diabetes is required")
        .oneOf(generalHealthyValues, "Please select if you have diabetes "),

    has_hypertension: yup
        .string()
        .required("Has hypertension is required")
        .oneOf(generalHealthyValues, "Please select if you have hypertension"),

    has_heart_disease: yup
        .string()
        .required("Has heart disease is required")
        .oneOf(generalHealthyValues, "Please select if you have heart disease"),

    is_smoker: yup
        .string()
        .required("Smoker status is required")
        .oneOf(generalHealthyValues, "Please select if you are a smoker"),

    activity_level: yup
        .string()
        .required("Activity level is required")
        .oneOf(["Low", "Medium", "High"], "Please select a valid activity level"),
});
