import { BloodPressureData, StepProps } from "../../../../Types";
import {
  SMOKING_STATUS,
  PHYSICAL_ACTIVITY_LEVEL,
  KNOWN_MEDICAL_CONDITIONS,
} from "../../../../utils/bloodPressureValues";
import Select from "../../../../ui/SelectInput";

const StepThreeHealthInfoOne = ({ register, errors, trigger }: StepProps<BloodPressureData>) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Health Info Part 1
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Smoking Status"
          id="SMOKING_STATUS"
          options={SMOKING_STATUS}
          register={register}
          error={errors.SMOKING_STATUS}
          placeholder="Select Smoking Status"
          trigger={trigger}
        />
        <Select
          label="Physical Activity Level"
          id="PHYSICAL_ACTIVITY_LEVEL"
          options={PHYSICAL_ACTIVITY_LEVEL}
          register={register}
          error={errors.PHYSICAL_ACTIVITY_LEVEL}
          placeholder="Select Activity Level"
          trigger={trigger}
        />
        <Select
          label="Known Medical Conditions"
          id="KNOWN_MEDICAL_CONDITIONS"
          options={KNOWN_MEDICAL_CONDITIONS}
          register={register}
          error={errors.KNOWN_MEDICAL_CONDITIONS}
          placeholder="Select Medical Conditions"
          trigger={trigger}
        />
      </div>
    </>
  );
};

export default StepThreeHealthInfoOne;
