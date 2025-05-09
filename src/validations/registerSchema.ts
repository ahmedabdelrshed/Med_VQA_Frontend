import * as yup from "yup";
import emailSchema from "./emailSchema";
import passwordSchema from "./passwordSchema";

const registerSchema = yup
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
    gender: yup
      .string()
      .required("Gender is required")
      .oneOf(["Male", "Female"], "Invalid gender selection"),
      DateOfBirth: yup
        .date()
        .typeError("Please enter a valid date")   
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future")
  })
  .concat(emailSchema)
  .concat(passwordSchema);

export default registerSchema;
