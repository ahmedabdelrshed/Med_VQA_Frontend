import { ObesityData, StepProps } from "../../../../Types";
import ErrorMsg from "../../../../ui/ErrorMsg";
import Input from "../../../../ui/Input";

const StepOneMeasurementsObesity = ({
  register,
  errors,
  trigger,
}: StepProps<ObesityData>) => {
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
            {...register("Height")}
            onChange={(e) => {
              register("Height").onChange(e);
              trigger("Height");
            }}
          />
          {errors.Height && <ErrorMsg msg={errors.Height.message} />}
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
            {...register("Weight")}
            onChange={(e) => {
              register("Weight").onChange(e);
              trigger("Weight");
            }}
          />
          {errors.Weight && <ErrorMsg msg={errors.Weight.message} />}
        </div>
      </div>
    </>
  );
};

export default StepOneMeasurementsObesity;
