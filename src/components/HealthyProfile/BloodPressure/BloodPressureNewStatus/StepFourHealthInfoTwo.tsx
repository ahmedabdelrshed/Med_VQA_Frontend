import { StepProps } from "../../../../Types";
import {
  STRESS_LEVEL,
  HISTORY_OF_HIGH_BP,
  SYMPTOMS_NOW,
} from "../../../../utils/bloodPressureValues";
import Select from "../../../../ui/SelectInput";

const StepFourHealthInfoTwo = ({ register, errors, trigger }: StepProps) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Health Info Part 2
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Stress Level"
          id="STRESS_LEVEL"
          options={STRESS_LEVEL}
          register={register}
          error={errors.STRESS_LEVEL}
          placeholder="Select Stress Level"
          trigger={trigger}
        />
        <Select
          label="Current Symptoms"
          id="SYMPTOMS_NOW"
          options={SYMPTOMS_NOW}
          register={register}
          error={errors.SYMPTOMS_NOW}
          placeholder="Select Symptoms"
          trigger={trigger}
        />
        <Select
          label="History of High BP"
          id="HISTORY_OF_HIGH_BP"
          options={HISTORY_OF_HIGH_BP}
          register={register}
          error={errors.HISTORY_OF_HIGH_BP}
          placeholder="Select History"
          trigger={trigger}
        />
      </div>
    </>
  );
};

export default StepFourHealthInfoTwo;
