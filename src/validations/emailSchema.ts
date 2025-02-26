import * as yup from "yup";

const emailSchema = yup.object({
    email: yup.string().required("Email is required").email("Invalid email"),
});
export default emailSchema;
