import { HealthyData,StepProps } from "../../../../Types";
import ErrorMsg from "../../../../ui/ErrorMsg";
import Input from "../../../../ui/Input";

const StepOneMeasurementsHealthy = ({
  register,
  errors,
  trigger,
}: StepProps<HealthyData> ) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Physical Measurements
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="Height"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Height (100–250 cm)
          </label>
          <Input
            id="Height"
            placeholder="Enter height"
            inputMode="numeric"
            {...register("height_cm")}
            onChange={(e) => {
              register("height_cm").onChange(e);
              trigger("height_cm");
            }}
          />
          {errors.height_cm && <ErrorMsg msg={errors.height_cm.message} />}
        </div>
        <div>
          <label
            htmlFor="Weight"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Weight (30–300 kg)
          </label>
          <Input
            id="Weight"
            placeholder="Enter weight"
            inputMode="numeric"
            {...register("weight_kg")}
            onChange={(e) => {
              register("weight_kg").onChange(e);
              trigger("weight_kg");
            }}
          />
          {errors.weight_kg && <ErrorMsg msg={errors.weight_kg.message} />}
        </div>
      </div>
    </>
  );
};

export default StepOneMeasurementsHealthy;
