import Select from "../../../../ui/SelectInput";
import { CAEC, FAMILY_HISTORY, FAVC } from "../../../../utils/obesityValues";
import RadioGroup from "../../../../ui/RadioGroup";
import { ObesityData, StepProps } from "../../../../Types";

const StepTwoFoodAndEatingHabits = ({
  register,
  errors,
  trigger,
}: StepProps<ObesityData>) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Food & Eating Habits
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Family History"
          id="family_history"
          options={FAMILY_HISTORY}
          register={register}
          error={errors.family_history}
          trigger={trigger}
          placeholder="Select Family History"
        />
        <Select
          label="High-Calorie Food (FAVC)"
          id="FAVC"
          options={FAVC}
          register={register}
          error={errors.FAVC}
          placeholder="Select High-Calorie Food"
          trigger={trigger}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RadioGroup
          label="Vegetable Consumption (FCVC)"
          name="FCVC"
          options={[1, 2, 3]}
          register={register}
          error={errors.FCVC}
          trigger={trigger}
        />
        <RadioGroup
          label="Main Meals Per Day (NCP)"
          name="NCP"
          options={[1, 2, 3, 4]}
          register={register}
          error={errors.NCP}
          trigger={trigger}
        />
      </div>

      <Select
        label="Snacking (CAEC)"
        id="CAEC"
        options={CAEC}
        register={register}
        error={errors.CAEC}
        placeholder="Select Snacking"
        trigger={trigger}
      />
    </>
  );
};

export default StepTwoFoodAndEatingHabits;
