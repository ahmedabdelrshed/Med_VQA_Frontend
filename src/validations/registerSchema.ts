import * as yup from "yup";
import emailSchema from "./emailSchema";
import passwordSchema from "./passwordSchema";

const registerSchema = yup.object({
    firstName: yup
        .string()
        .required("First name is required")
        .min(3, "First name must be at least 3 characters")
        .max(12, "First name cannot exceed 12 characters"),
    lastName: yup
        .string()
        .required("Last name is required")
        .min(3, "Last name must be at least 3 characters")
        .max(12, "Last name cannot exceed 12 characters"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"),], "Passwords must match")
        .required("Confirm Password is required"),
});

export default registerSchema;
