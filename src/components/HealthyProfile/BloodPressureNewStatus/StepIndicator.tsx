type Props = {
  currentStep: number;
  totalSteps: number;
};

const StepIndicator = ({ currentStep, totalSteps }: Props) => (
  <div className="flex justify-center mb-6">
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
      <div
        key={step}
        className={`w-3 h-3 rounded-full mx-2 ${
          step === currentStep
            ? "bg-blue-500"
            : step < currentStep
            ? "bg-blue-300"
            : "bg-gray-300"
        }`}
      />
    ))}
  </div>
);

export default StepIndicator;
