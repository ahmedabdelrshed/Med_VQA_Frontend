import * as yup from "yup";

const emailSchema = yup
  .string()
  .required("Email is required")
  .email("Invalid email format");
export default emailSchema;
