import { ObesityData } from "../Types";

const readableStatus: Record<string, string> = {
    Insufficient_Weight: "Underweight",
    Normal_Weight: "Healthy Weight",
    Overweight_Level_I: "Slightly Overweight",
    Overweight_Level_II: "Moderately Overweight",
    Obesity_Type_I: "Obesity - Mild",
    Obesity_Type_II: "Obesity - Moderate",
    Obesity_Type_III: "Obesity - Severe",
};

const formatDateObesity = (isoDate: string | undefined) => {
    if (!isoDate) return "Not Assigned";
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const FAMILY_HISTORY = ["yes", "no"]
const FAVC = ["yes", "no"]
const SMOKE = ["yes", "no"]
const SCC = ["yes", "no"]
const CALC = ["no", "Sometimes", "Frequently", "Always"]
const MTRANS = ["Public_Transportation", "Walking", "Automobile", "Motorbike", "Bike"]
const CAEC = ["Sometimes", "Frequently", "Always", "no"]
const stepFieldsObesity: Record<number, (keyof ObesityData)[]> = {
  1: ["Height", "Weight"],
  2: ["family_history", "FAVC", "FCVC", "NCP", "CAEC"],
  3: ["SMOKE", "CH2O", "SCC", "FAF", "TUE"],
  4: ["CALC", "MTRANS"],
};



export {
    readableStatus, formatDateObesity,
    FAMILY_HISTORY, FAVC, SMOKE, SCC, CALC, MTRANS, CAEC,
    stepFieldsObesity
};