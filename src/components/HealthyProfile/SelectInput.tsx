// components/ui/Select.tsx
import { FieldError, UseFormRegister, Path, UseFormTrigger } from "react-hook-form";
import { BloodPressureData, BloodSugarData } from "../../Types";

interface SelectProps<T extends BloodPressureData | BloodSugarData> {
  label: string;
  id: Path<T>;
  options: string[];
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  trigger?:UseFormTrigger<T>
}

const Select = <T extends BloodPressureData | BloodSugarData>({
  label,
  id,
  options,
  register,
  error,
  placeholder = "Select option",
  trigger,
}: SelectProps<T>) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={String(id)}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={String(id)}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none`}
        {...register(id)}
        onChange={(e) => {
          register(id).onChange(e);
          if (trigger) {
            trigger(id);
          }
        }}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default Select;
