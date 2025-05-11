import Button from "../../ui/Button";
import Input from "../../ui/Input";
import {
  DIABETES_STATUS,
  LAST_MEAL_TIME,
  MEDICATION_TAKEN,
  PHYSICAL_ACTIVITY,
  SYMPTOMS,
  TIME_OF_MEASUREMENT,
} from "../../utils/bloodSugarValues";
import formatEgyptTime from "../../utils/getTime";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "../../ui/ErrorMsg";
import bloodSugarSchema from "../../validations/bloodSugarSchema";
import { BloodSugarData, BloodSugarDataRequest } from "../../Types";
import Select from "./SelectInput";
import { useNewStatusMutation } from "../../store/BloodSugar/bloodSugarApi";
import toast from "react-hot-toast";
import { closeModel } from "../../utils/modelsFuns";

const AssignNewStatusMod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
      reset,
    clearErrors,
  } = useForm<BloodSugarData>({
    resolver: yupResolver(bloodSugarSchema),
    defaultValues: {
      bloodSugar: "",
      diabetesStatus: "",
      timeOfMeasurement: "",
      symptoms: "",
      medicationTaken: "",
      physicalActivity: "",
      lastMealTime: "",
    },
  });
  const [newStatus, { isLoading }] = useNewStatusMutation();

  const onSubmit = async (data: BloodSugarData) => {
    try {
      const requestData: BloodSugarDataRequest = {
        blood_sugar: Number(data.bloodSugar),
        diabetes_status: data.diabetesStatus,
        time_of_measurement: data.timeOfMeasurement,
        symptoms: data.symptoms,
        medication_taken: data.medicationTaken,
        physical_activity: data.physicalActivity,
        last_meal_time: data.lastMealTime,
      };
      await newStatus(requestData)
        .unwrap()
        .then(() => {
          handleClose();
          toast.success("Blood sugar status assigned successfully!");
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    closeModel("assignNewStatusModal");
    clearErrors();
      reset();
  };
  return (
    <dialog
      id="assignNewStatusModal"
      className="modal fixed inset-0 flex justify-center items-center"
    >
      <div className="modal-box bg-white text-black  flex flex-col p-6 rounded-lg max-w-3xl w-full">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="overflow-y-auto max-h-[80vh]">
          <h3 className="text-lg font-bold mb-4 text-blue-500 italic text-center">
            Assign New Blood Sugar Status
          </h3>

          {/* Current Date/Time and User Info */}
          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Date: {formatEgyptTime()}</span>
          </div>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* Blood Sugar Input - Full Width */}
            <div className="mb-4">
              <label
                htmlFor="bloodSugar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Blood Sugar Level
              </label>
              <Input
                id="bloodSugar"
                placeholder="Blood Sugar"
                type="number"
                {...register("bloodSugar")}
              />
              {errors.bloodSugar && (
                <ErrorMsg msg={errors.bloodSugar?.message} />
              )}
            </div>

            {/* Two Column Layout for Selects */}
            <div className="grid grid-cols-2 gap-4">
              {/* Diabetes Status Select */}
              <Select
                label="Diabetes Status"
                id="diabetesStatus"
                options={DIABETES_STATUS}
                register={register}
                error={errors.diabetesStatus}
                placeholder="Select Status"
              />

              <Select
                label="Time of Measurement"
                id="timeOfMeasurement"
                options={TIME_OF_MEASUREMENT}
                register={register}
                error={errors.timeOfMeasurement}
                placeholder="Select Time"
              />

              <Select
                label="Symptoms"
                id="symptoms"
                options={SYMPTOMS}
                register={register}
                error={errors.symptoms}
                placeholder="Select Symptoms"
              />

              <Select
                label="Medication Taken"
                id="medicationTaken"
                options={MEDICATION_TAKEN}
                register={register}
                error={errors.medicationTaken}
                placeholder="Select Medication"
              />

              <Select
                label="Physical Activity Level"
                id="physicalActivity"
                options={PHYSICAL_ACTIVITY}
                register={register}
                error={errors.physicalActivity}
                placeholder="Select Activity"
              />

              <Select
                label="Last Meal Time"
                id="lastMealTime"
                options={LAST_MEAL_TIME}
                register={register}
                error={errors.lastMealTime}
                placeholder="Select Meal Time"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300"
                isLoading={isLoading}
                type="submit"
                disabled={Object.keys(errors).length > 0 || isLoading}
              >
                Submit
              </Button>
                          <Button
                type="button"
                className="bg-gray-500 hover:bg-gray-600"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AssignNewStatusMod;
