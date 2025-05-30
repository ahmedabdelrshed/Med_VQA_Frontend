import { HealthyData, StepProps } from "../../../../Types";
import Select from "../../../../ui/SelectInput";
import { generalHealthyValues } from "../../../../utils/healthyValues";

const StepThreeMedicalLifestyle = ({
  register,
  errors,
  trigger,
}: StepProps<HealthyData>) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Lifestyle Information
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Select
          label="Do you have been Smoking ?"
          id="is_smoker"
          options={generalHealthyValues}
          register={register}
          error={errors.is_smoker}
          placeholder="Select Smoking Status"
          trigger={trigger}
        />
        <Select
          label="Select your Physical Activity Level"
          id="activity_level"
          options={["Low", "Medium", "High"]}
          register={register}
          error={errors.activity_level}
          placeholder="Select Physical Activity Level"
          trigger={trigger}
        />
      </div>
    </div>
  );
};

export default StepThreeMedicalLifestyle;
