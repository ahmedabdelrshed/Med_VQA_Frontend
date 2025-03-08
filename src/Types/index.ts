export interface IRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ILogin {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export type TUserUpdated = {
    firstName: string;
    lastName: string;
    password?: string;
    oldPassword?: string;
    confirmPassword?: string;
    file?: File | null;
}