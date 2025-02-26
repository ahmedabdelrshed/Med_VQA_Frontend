import * as yup from "yup";
import emailSchema from "./emailSchema";

const loginSchema = yup.object({
    password: yup.string().required("Password is required"),
}).concat(emailSchema);

export default loginSchema;
