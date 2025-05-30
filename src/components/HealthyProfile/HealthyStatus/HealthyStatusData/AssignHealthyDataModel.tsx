import { useState } from "react";
import Button from "../../../../ui/Button";
import formatEgyptTime from "../../../../utils/getTime";
import StepIndicator from "../../BloodPressure/BloodPressureNewStatus/StepIndicator";
import useAddNewStatusHealthy from "../../../../hooks/useAddNewStatusHealthy";
import { healthStepFields } from "../../../../utils/healthyValues";
import StepOneMeasurementsHealthy from "./StepOneMeasurementsHealthy";
import StepTwoMedicalHistoryHealthy from "./StepTwoMedicalHistoryHealthy";
import StepThreeMedicalLifestyle from "./StepThreeMedicalLifestyle";
import { HealthyData } from "../../../../Types";

const AssignHealthyDataModel = ({
  updateHealthData,
}: {
  updateHealthData: HealthyData;
}) => {
  const {
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    trigger,
    handleClose,
  } = useAddNewStatusHealthy(updateHealthData);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentFields = healthStepFields[currentStep];
    const valid = await trigger(currentFields);
    if (valid) nextStep();
  };
  const onClose = () => {
    setCurrentStep(1);
    handleClose();
  };

  return (
    <dialog
      id="NewHealthyModal"
      className="modal fixed inset-0 flex justify-center items-center"
    >
      <div className="modal-box bg-white text-black flex flex-col p-6 rounded-lg max-w-3xl w-full">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>

        <div className="overflow-y-auto max-h-[80vh]">
          <h3 className="text-lg font-bold mb-4 text-blue-500 italic text-center">
            Assign Healthy Data
          </h3>

          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Date: {formatEgyptTime()}</span>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <form
            onSubmit={
              currentStep === 3 ? handleSubmit(onSubmit) : handleNextStep
            }
          >
            <div className={`${currentStep === 1 ? "block" : "hidden"}`}>
              <StepOneMeasurementsHealthy
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>
            <div className={`${currentStep === 2 ? "block" : "hidden"}`}>
              <StepTwoMedicalHistoryHealthy
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>
            <div className={`${currentStep === 3 ? "block" : "hidden"}`}>
              <StepThreeMedicalLifestyle
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>

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
              {currentStep === 3 ? (
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

export default AssignHealthyDataModel;
