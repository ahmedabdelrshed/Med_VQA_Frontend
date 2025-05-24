import { useState } from "react";
import Button from "../../../ui/Button";
import formatEgyptTime from "../../../utils/getTime";
import useAddNewStatusBloodPressure from "../../../hooks/useAddNewStatusBloodPressure";
import StepOneMeasurements from "./StepOneMeasurements";
import StepTwoBloodPressure from "./StepTwoBloodPressure";
import StepThreeHealthInfoOne from "./StepThreeHealthInfoOne";
import StepFourHealthInfoTwo from "./StepFourHealthInfoTwo";
import StepIndicator from "./StepIndicator";

const AssignNewStatusBloodPressure = () => {
  const { errors, handleSubmit, isLoading, onSubmit, register } =
    useAddNewStatusBloodPressure();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <dialog
      id="NewBloodPressureModal"
      className="modal fixed inset-0 flex justify-center items-center"
    >
      <div className="modal-box bg-white text-black flex flex-col p-6 rounded-lg max-w-3xl w-full">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div className="overflow-y-auto max-h-[80vh]">
          <h3 className="text-lg font-bold mb-4 text-blue-500 italic text-center">
            Assign New Blood Pressure Status
          </h3>

          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Date: {formatEgyptTime()}</span>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <form
            onSubmit={
              currentStep === 4 ? handleSubmit(onSubmit) : handleNextStep
            }
          >
            {currentStep === 1 && (
              <StepOneMeasurements register={register} errors={errors} />
            )}
            {currentStep === 2 && (
              <StepTwoBloodPressure register={register} errors={errors} />
            )}
            {currentStep === 3 && (
              <StepThreeHealthInfoOne register={register} errors={errors} />
            )}
            {currentStep === 4 && (
              <StepFourHealthInfoTwo register={register} errors={errors} />
            )}

            <div className="flex justify-end space-x-3 mt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600"
                >
                  Back
                </Button>
              )}
              {currentStep === 4 ? (
                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading || Object.keys(errors).length > 0}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AssignNewStatusBloodPressure;
