import * as yup from "yup";

const profileSchema = yup.object({
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

    oldPassword: yup
        .string()
        .optional(),

    password: yup
        .string()
        .when("oldPassword", {
            is: (value: string | undefined) => value && value.length > 0,
            then: (schema) =>
                schema
                    .required("New Password is required")
                    .min(8, "Password must be at least 8 characters")
                    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
                    .matches(/[a-z]/, "Must contain at least one lowercase letter")
                    .matches(/\d/, "Must contain at least one number")
                    .matches(/[@$!%*?&#]/, "Must contain at least one special character (@$!%*?&#)"),
            otherwise: (schema) => schema.optional(),
        }),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .when("oldPassword", {
            is: (value: string | undefined) => value && value.length > 0,
            then: (schema) => schema.required("Confirm Password is required"),
            otherwise: (schema) => schema.optional(),
        }),
});

export default profileSchema;