import { useState } from "react";
import Button from "../../../../ui/Button";
import formatEgyptTime from "../../../../utils/getTime";
import StepIndicator from "../../BloodPressure/BloodPressureNewStatus/StepIndicator";
import useAddNewStatusObesity from "../../../../hooks/useAddNewStatusObesity";
import StepOneMeasurementsObesity from "./StepOneMeasurementsObesity";
import StepTwoFoodAndEatingHabits from "./StepTwoFoodAndEatingHabits";
import StepThreeLifestyle from "./StepThreeLifestyle";
import StepFourAlcoholAndTransportation from "./StepFourAlcoholAndTransportation";
import { stepFieldsObesity } from "../../../../utils/obesityValues";

const ObesityNewStatus = () => {
  const {
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    trigger,
    handleClose,
  } = useAddNewStatusObesity();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentFields = stepFieldsObesity[currentStep];
    const valid = await trigger(currentFields);
    if (valid) nextStep();
  };
  const onClose = () => {
    setCurrentStep(1);
    handleClose();
  };

  return (
    <dialog
      id="NewObesityModal"
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
            Assign New Obesity Status
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
            <div className={`${currentStep === 1 ? "block" : "hidden"}`}>
              <StepOneMeasurementsObesity
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>
            <div className={`${currentStep === 2 ? "block" : "hidden"}`}>
              <StepTwoFoodAndEatingHabits
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>
            <div className={`${currentStep === 3 ? "block" : "hidden"}`}>
              <StepThreeLifestyle
                errors={errors}
                register={register}
                trigger={trigger}
              />
            </div>

            <div className={`${currentStep === 4 ? "block" : "hidden"}`}>
              <StepFourAlcoholAndTransportation
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

export default ObesityNewStatus;
