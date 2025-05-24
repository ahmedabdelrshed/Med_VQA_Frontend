import { StepProps } from "../../../Types";
import ErrorMsg from "../../../ui/ErrorMsg";
import Input from "../../../ui/Input";

const StepTwoBloodPressure = ({ register, errors, trigger }: StepProps) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Blood Pressure Measurements
      </h4>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="Systolic_BP"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Systolic BP (70-200)
          </label>
          <Input
            id="Systolic_BP"
            placeholder="Systolic BP"
            inputMode="numeric"
            pattern="[0-9]*"
            {...register("Systolic_BP")}
            onChange={(e) => {
              register("Systolic_BP").onChange(e);
              trigger("Systolic_BP");
            }}
          />
          {errors.Systolic_BP && <ErrorMsg msg={errors.Systolic_BP.message} />}
        </div>

        <div>
          <label
            htmlFor="Diastolic_BP"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Diastolic BP (40-130)
          </label>
          <Input
            id="Diastolic_BP"
            placeholder="Diastolic BP"
            inputMode="numeric"
            pattern="[0-9]*"
            {...register("Diastolic_BP")}
            onChange={(e) => {
              register("Diastolic_BP").onChange(e);
              trigger("Diastolic_BP");
            }}
          />
          {errors.Diastolic_BP && (
            <ErrorMsg msg={errors.Diastolic_BP.message} />
          )}
        </div>

        <div>
          <label
            htmlFor="Heart_Rate_BPM"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Heart Rate (40-200 BPM)
          </label>
          <Input
            id="Heart_Rate_BPM"
            placeholder="Heart Rate"
            inputMode="numeric"
            pattern="[0-9]*"
            {...register("Heart_Rate_BPM")}
          />
          {errors.Heart_Rate_BPM && (
            <ErrorMsg msg={errors.Heart_Rate_BPM.message} />
          )}
        </div>
      </div>
    </>
  );
};

export default StepTwoBloodPressure;
