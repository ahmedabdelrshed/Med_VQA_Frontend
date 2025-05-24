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

export interface Prediction {
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

export interface BloodSugarDataRequest {
    blood_sugar: number;
    diabetes_status: string;
    time_of_measurement: string;
    symptoms: string;
    medication_taken: string;
    physical_activity: string;
    last_meal_time: string;
}

export interface BloodPressureData {
    SMOKING_STATUS: string;
    PHYSICAL_ACTIVITY_LEVEL: string;
    KNOWN_MEDICAL_CONDITIONS: string;
    STRESS_LEVEL: string;
    SYMPTOMS_NOW: string;
    HISTORY_OF_HIGH_BP: string;
    Diastolic_BP: string;
    Systolic_BP: string;
    Heart_Rate_BPM: string;
    Height_cm: string;
    Weight_kg: string;
}
export interface BloodPressureDataRequest {
    Smoking_Status: string;
    Physical_Activity_Level: string;
    Known_Medical_Conditions: string;
    Stress_Level: string;
    Symptoms_Now: string;
    History_of_High_BP: string;
    Diastolic_BP: number;
    Systolic_BP: number;
    Heart_Rate_BPM: number;
    Height_cm: number;
    Weight_kg: number;
}

import { FieldErrors, UseFormRegister, UseFormTrigger } from "react-hook-form";

export interface StepProps {
    register: UseFormRegister<BloodPressureData>;
    errors: FieldErrors<BloodPressureData>;
    trigger: UseFormTrigger<BloodPressureData>;
}