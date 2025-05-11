export interface IRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    DateOfBirth: Date;
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

export type LevelTypeDiabetes = "Normal" | "Potentially Dangerous" | "Dangerous";

export interface PredictionDiabetes {
    createdAt: string;
    result: LevelTypeDiabetes;
}

export interface BloodSugarData {
    bloodSugar: string;
    diabetesStatus: string;
    timeOfMeasurement: string;
    symptoms: string;
    medicationTaken: string;
    physicalActivity: string;
    lastMealTime: string;
}

export interface BloodSugarDataRequest  {
    blood_sugar: number;
    diabetes_status: string;
    time_of_measurement: string;
    symptoms: string;
    medication_taken: string;
    physical_activity: string;
    last_meal_time: string;
}