import * as yup from 'yup';
import { HISTORY_OF_HIGH_BP, KNOWN_MEDICAL_CONDITIONS, PHYSICAL_ACTIVITY_LEVEL, SMOKING_STATUS, STRESS_LEVEL } from '../utils/bloodPressureValues';
import { SYMPTOMS } from '../utils/bloodSugarValues';


export const bloodPressureSchema = yup
    .object({
        SMOKING_STATUS: yup
            .string()
            .required("Smoking status is required")
            .oneOf(SMOKING_STATUS, "Please select a valid smoking status"),

        PHYSICAL_ACTIVITY_LEVEL: yup
            .string()
            .required("Physical activity level is required")
            .oneOf(PHYSICAL_ACTIVITY_LEVEL, "Please select a valid activity level"),

        KNOWN_MEDICAL_CONDITIONS: yup
            .string()
            .required("Medical conditions information is required")
            .oneOf(
                KNOWN_MEDICAL_CONDITIONS,
                "Please select a valid medical condition"
            ),

        STRESS_LEVEL: yup
            .string()
            .required("Stress level is required")
            .oneOf(STRESS_LEVEL, "Please select a valid stress level"),

        SYMPTOMS_NOW: yup
            .string()
            .required("Current symptoms information is required")
            .oneOf(SYMPTOMS, "Please select valid symptoms"),

        HISTORY_OF_HIGH_BP: yup
            .string()
            .required("Blood pressure history is required")
            .oneOf(HISTORY_OF_HIGH_BP, "Please select a valid history option"),

        Diastolic_BP: yup
            .string()
            .required("Diastolic blood pressure is required")
            .test(
                "is-number",
                "Diastolic BP must be a number",
                (value) => !isNaN(Number(value))
            )
            .test(
                "is-valid-range",
                "Diastolic BP must be between 40 and 130",
                (value) => {
                    const num = Number(value);
                    return !isNaN(num) && num >= 40 && num <= 130;
                }
            ),

        Systolic_BP: yup
            .string()
            .required("Systolic blood pressure is required")
            .test(
                "is-number",
                "Systolic BP must be a number",
                (value) => !isNaN(Number(value))
            )
            .test(
                "is-valid-range",
                "Systolic BP must be between 70 and 200",
                (value) => {
                    const num = Number(value);
                    return !isNaN(num) && num >= 70 && num <= 200;
                }
            ),

        Heart_Rate_BPM: yup
            .string()
            .required("Heart rate is required")
            .test(
                "is-number",
                "Heart rate must be a number",
                (value) => !isNaN(Number(value))
            )
            .test(
                "is-valid-range",
                "Heart rate must be between 40 and 200 BPM",
                (value) => {
                    const num = Number(value);
                    return !isNaN(num) && num >= 40 && num <= 200;
                }
            ),

        Height_cm: yup
            .string()
            .required("Height is required")
            .test(
                "is-number",
                "Height must be a number",
                (value) => !isNaN(Number(value))
            )
            .test(
                "is-valid-range",
                "Height must be between 100 and 250 cm",
                (value) => {
                    const num = Number(value);
                    return !isNaN(num) && num >= 100 && num <= 250;
                }
            ),

        Weight_kg: yup
            .string()
            .required("Weight is required")
            .test(
                "is-number",
                "Weight must be a number",
                (value) => !isNaN(Number(value))
            )
            .test(
                "is-valid-range",
                "Weight must be between 30 and 300 kg",
                (value) => {
                    const num = Number(value);
                    return !isNaN(num) && num >= 30 && num <= 300;
                }
            ),
    })
    .required();