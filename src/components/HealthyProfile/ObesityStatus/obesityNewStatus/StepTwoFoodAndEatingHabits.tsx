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
      <div className="grid grid-cols-1 ">
        <Select
          label="Has a family member suffered or suffers from overweight?"
          id="family_history"
          options={FAMILY_HISTORY}
          register={register}
          error={errors.family_history}
          trigger={trigger}
          placeholder="Select Family History"
        />
        <Select
          label="Do you eat high caloric food frequently?"
          id="FAVC"
          options={FAVC}
          register={register}
          error={errors.FAVC}
          placeholder="Select High-Calorie Food"
          trigger={trigger}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3">
        <RadioGroup
          label="Vegetable Consumption Per Day"
          name="FCVC"
          options={[1, 2, 3]}
          register={register}
          error={errors.FCVC}
          trigger={trigger}
        />
        <RadioGroup
          label="Main Meals Per Day "
          name="NCP"
          options={[1, 2, 3, 4]}
          register={register}
          error={errors.NCP}
          trigger={trigger}
        />
      </div>

      <Select
        label="Do you eat any food between meals?"
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
