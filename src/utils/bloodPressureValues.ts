import { BloodPressureData } from "../Types";

const SMOKING_STATUS = ["Yes", "No"];
const PHYSICAL_ACTIVITY_LEVEL = ["Low", "Moderate", "High"]
const KNOWN_MEDICAL_CONDITIONS = ["No", "Both", "Diabetes", "Heart Disease"]
const STRESS_LEVEL = ["High", "Medium", "Low"];
const SYMPTOMS_NOW = ["Dizziness", "No", "Multiple", "Blurred Vision", "Headache"]
const HISTORY_OF_HIGH_BP = ["Yes", "No"]



const stepFields: Record<number, (keyof BloodPressureData)[]> = {
    1: ["Height_cm", "Weight_kg"],
    2: ["Systolic_BP", "Diastolic_BP", "Heart_Rate_BPM"],
    3: [
      "SMOKING_STATUS",
      "PHYSICAL_ACTIVITY_LEVEL",
      "KNOWN_MEDICAL_CONDITIONS",
    ],
    4: ["STRESS_LEVEL", "SYMPTOMS_NOW", "HISTORY_OF_HIGH_BP"],
  };
export {
    SMOKING_STATUS,
    PHYSICAL_ACTIVITY_LEVEL,
    KNOWN_MEDICAL_CONDITIONS,
    STRESS_LEVEL,
    SYMPTOMS_NOW,
    HISTORY_OF_HIGH_BP,
    stepFields
};

