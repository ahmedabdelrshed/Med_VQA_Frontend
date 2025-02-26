import * as yup from "yup";
import emailSchema from "./emailSchema";

const loginSchema = yup.object({
    email: emailSchema,
    password: yup.string().required("Password is required"),
});

export default loginSchema;
