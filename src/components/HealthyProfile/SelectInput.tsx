// components/ui/Select.tsx
import { FieldError, UseFormRegister } from "react-hook-form";
import { BloodSugarData } from "../../Types";

interface SelectProps {
  label: string;
  id: keyof BloodSugarData;
  options: string[];
  register: UseFormRegister<BloodSugarData>;
  error?: FieldError;
  placeholder?: string;
}

const Select = ({
  label,
  id,
  options,
  register,
  error,
  placeholder = "Select option",
}: SelectProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none`}
        {...register(id)}
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
