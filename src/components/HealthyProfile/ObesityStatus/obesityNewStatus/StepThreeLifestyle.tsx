import { ObesityData, StepProps } from "../../../../Types";
import ErrorMsg from "../../../../ui/ErrorMsg";
import Input from "../../../../ui/Input";
import RadioGroup from "../../../../ui/RadioGroup";
import Select from "../../../../ui/SelectInput";
import { SMOKE, SCC } from "../../../../utils/obesityValues";

const StepThreeLifestyle = ({
  register,
  errors,
  trigger,
}: StepProps<ObesityData>) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">Lifestyle</h4>
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Smoking Status"
          id="SMOKE"
          options={SMOKE}
          register={register}
          error={errors.SMOKE}
          placeholder="Select Smoking Status"
          trigger={trigger}
        />

        <Select
          label="Calories Monitoring"
          id="SCC"
          options={SCC}
          register={register}
          error={errors.SCC}
          placeholder="Select Calories Monitoring"
          trigger={trigger}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RadioGroup
          label="Water Intake (CH2O)"
          name="CH2O"
          options={[1, 2, 3]}
          register={register}
          error={errors.CH2O}
          trigger={trigger}
        />
        <RadioGroup
          label="Physical Activity (FAF)"
          name="FAF"
          options={[0, 1, 2, 3]}
          register={register}
          error={errors.FAF}
          trigger={trigger}
        />
      </div>
      <Input
        id="TUE"
        placeholder="Technology Usage (hours)"
        inputMode="numeric"
        {...register("TUE")}
        onChange={(e) => {
          register("TUE").onChange(e);
          trigger("TUE");
        }}
      />
      {errors.TUE && <ErrorMsg msg={errors.TUE.message} />}
    </>
  );
};

export default StepThreeLifestyle;
