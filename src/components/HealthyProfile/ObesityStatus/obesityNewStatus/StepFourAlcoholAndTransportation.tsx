import { ObesityData, StepProps } from "../../../../Types";
import Select from "../../../../ui/SelectInput";
import { CALC, MTRANS } from "../../../../utils/obesityValues";

const StepFourAlcoholAndTransportation = ({
  register,
  errors,
  trigger,
}: StepProps<ObesityData>) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Alcohol & Transportation
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="How often do you drink alcohol?"
          id="CALC"
          options={CALC}
          register={register}
          error={errors.CALC}
          placeholder="Select Alcohol Consumption"
          trigger={trigger}
        />
        <Select
          label="Which transportation do you usually use?"
          id="MTRANS"
          options={MTRANS}
          register={register}
          error={errors.MTRANS}
          placeholder="Select Transportation Mode"
          trigger={trigger}
        />
      </div>
    </>
  );
};

export default StepFourAlcoholAndTransportation;
