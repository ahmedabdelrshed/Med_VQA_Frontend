import { HealthyData } from "../Types";

const generalHealthyValues  = ["Yes",'No']
const healthStepFields: Record<number, (keyof HealthyData)[]> = {
  1: ["height_cm", "weight_kg"],
  2: ["has_diabetes", "has_hypertension", "has_heart_disease"],
  3: ["is_smoker", "activity_level"]
};
export { healthStepFields, generalHealthyValues };