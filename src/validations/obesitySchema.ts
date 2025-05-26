import * as yup from 'yup';
import {
    FAMILY_HISTORY,
    FAVC,
    CAEC,
    SMOKE,
    SCC,
    CALC,
    MTRANS,
} from '../utils/obesityValues'; // adjust the path as needed

export const obesitySchema = yup.object({
    Height: yup
        .string()
        .required("Height is required")
        .test("is-number", "Height must be a number", value => !isNaN(Number(value)))
        .test("is-valid-range", "Height must be between 100 and 250 cm", value => {
            const num = Number(value);
            return num >= 100 && num <= 250;
        }),

    Weight: yup
        .string()
        .required("Weight is required")
        .test("is-number", "Weight must be a number", value => !isNaN(Number(value)))
        .test("is-valid-range", "Weight must be between 30 and 300 kg", value => {
            const num = Number(value);
            return num >= 30 && num <= 300;
        }),

    family_history: yup
        .string()
        .required('Family history is required.')
        .oneOf(FAMILY_HISTORY, 'Please select a valid family history option.'),

    FAVC: yup
        .string()
        .required('Frequent high-calorie food consumption is required.')
        .oneOf(FAVC, 'Please select a valid FAVC option.'),

    FCVC: yup
        .string()
        .required('Vegetable consumption frequency is required.')
        .test("is-valid-number", "FCVC must be a number between 1 and 3.", value => {
            const num = Number(value);
            return !isNaN(num) && num >= 1 && num <= 3;
        }),

    NCP: yup
        .string()
        .required('Number of main meals is required.')
        .test("is-valid-number", "NCP must be a number between 1 and 4.", value => {
            const num = Number(value);
            return !isNaN(num) && num >= 1 && num <= 4;
        }),

    CAEC: yup
        .string()
        .required('Snacking habits are required.')
        .oneOf(CAEC, 'Please select a valid CAEC option.'),

    SMOKE: yup
        .string()
        .required('Smoking status is required.')
        .oneOf(SMOKE, 'Please select a valid SMOKE option.'),

    CH2O: yup
        .string()
        .required('Water consumption is required.')
        .test("is-valid-number", "CH2O must be a number between 1 and 3.", value => {
            const num = Number(value);
            return !isNaN(num) && num >= 1 && num <= 3;
        }),

    SCC: yup
        .string()
        .required('Calories monitoring is required.')
        .oneOf(SCC, 'Please select a valid SCC option.'),

    FAF: yup
        .string()
        .required('Physical activity frequency is required.')
        .test("is-valid-number", "FAF must be a number between 0 and 3.", value => {
            const num = Number(value);
            return !isNaN(num) && num >= 0 && num <= 3;
        }),

    TUE: yup
        .string()
        .required('Time using technology is required.')
        .test("is-valid-number", "TUE must be a positive number.", value => {
            const num = Number(value);
            return !isNaN(num) && num >= 0;
        }),

    CALC: yup
        .string()
        .required('Alcohol consumption is required.')
        .oneOf(CALC, 'Please select a valid CALC option.'),

    MTRANS: yup
        .string()
        .required('Transportation mode is required.')
        .oneOf(MTRANS, 'Please select a valid MTRANS option.'),
});
