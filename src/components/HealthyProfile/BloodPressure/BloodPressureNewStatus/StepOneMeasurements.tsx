import { StepProps } from "../../../../Types";
import ErrorMsg from "../../../../ui/ErrorMsg";
import Input from "../../../../ui/Input";

const StepOneMeasurements = ({ register, errors, trigger }: StepProps) => (
  <>
    <h4 className="text-lg font-semibold text-gray-700 mb-4">
      Physical Measurements
    </h4>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="Height_cm"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Height (100–250 cm)
        </label>
        <Input
          id="Height_cm"
          placeholder="Height in cm"
          inputMode="numeric"
          {...register("Height_cm")}
          onChange={(e) => {
            register("Height_cm").onChange(e);
            trigger("Height_cm");
          }}
        />
        {errors.Height_cm && <ErrorMsg msg={errors.Height_cm.message} />}
      </div>
      <div>
        <label
          htmlFor="Weight_kg"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Weight (30–300 kg)
        </label>
        <Input
          id="Weight_kg"
          placeholder="Weight in kg"
          inputMode="numeric"
          {...register("Weight_kg")}
          onChange={(e) => {
            register("Weight_kg").onChange(e);
            trigger("Weight_kg");
          }}
        />
        {errors.Weight_kg && <ErrorMsg msg={errors.Weight_kg.message} />}
      </div>
    </div>
  </>
);

export default StepOneMeasurements;
