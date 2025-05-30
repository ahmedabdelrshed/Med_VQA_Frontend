import { HealthyData, StepProps } from "../../../../Types"
import Select from "../../../../ui/SelectInput"
import { generalHealthyValues } from "../../../../utils/healthyValues"

const StepTwoMedicalHistoryHealthy = ({register,
  errors,
  trigger,
}: StepProps<HealthyData>) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        Medical History
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
         <Select
          label="Do you have Diabetes ?"
          id="has_diabetes"
          options={generalHealthyValues}
          register={register}
          error={errors.has_diabetes}
          placeholder="Select Diabetes Status"
          trigger={trigger}
        />
          <Select
            label="Do you have  Hypertension ?"
            id="has_hypertension"
            options={generalHealthyValues}
            register={register}
            error={errors.has_hypertension}
            placeholder="Select Hypertension Status"
            trigger={trigger}
        />
          <Select
            label="Do you have  Heart Disease ?"
            id="has_heart_disease"
            options={generalHealthyValues}
            register={register}
            error={errors.has_heart_disease}
            placeholder="Select Heart Disease Status"
            trigger={trigger}
        />

      </div>

    </div>
  )
}

export default StepTwoMedicalHistoryHealthy