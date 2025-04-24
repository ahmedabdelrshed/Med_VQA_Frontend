import * as yup from "yup";
import emailSchema from "./emailSchema";

const contactSchema = yup
    .object({
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
        message: yup
            .string()
            .required("Message is required")
            .min(3, "Message must be at least 5 characters")
    })
    .concat(emailSchema)

export default contactSchema;
