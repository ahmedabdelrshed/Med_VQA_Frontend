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

export type TChat = {
    _id: string,
    title: string
}

export type TQuestion = {
    _id: string,
    question: string,
    imageUrl: string,
    answer: string,
    chatId: string,
    createdAt: string,
}


export interface IContact {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}