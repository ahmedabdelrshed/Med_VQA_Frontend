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

export { readableStatus , formatDateObesity };