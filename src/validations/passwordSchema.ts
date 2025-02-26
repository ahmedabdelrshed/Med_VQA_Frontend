import * as yup from "yup";

const passwordSchema = yup.object({
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/\d/, "Must contain at least one number")
        .matches(/[@$!%*?&#]/, "Must contain at least one special character (@$!%*?&#)")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"),], "Passwords must match")
        .required("Confirm Password is required"),
});
export default passwordSchema;