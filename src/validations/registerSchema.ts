import * as yup from "yup";

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
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
        .string()
        .required("Password is required")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[@$!%*?&#]/, "Password must contain at least one special character (@$!%*?&#)")
        .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"),], "Passwords must match")
        .required("Confirm Password is required"),
});

export default registerSchema;
