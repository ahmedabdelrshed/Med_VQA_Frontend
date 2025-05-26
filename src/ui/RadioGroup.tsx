import { FieldError, UseFormRegister, UseFormTrigger } from "react-hook-form";
import ErrorMsg from "./ErrorMsg";
import { ObesityData } from "../Types";

interface RadioGroupProps {
  label: string;
  name: keyof ObesityData;
  options: number[];
  register: UseFormRegister<ObesityData>;
  error?: FieldError;
  trigger?: UseFormTrigger<ObesityData>;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  register,
  error,
  trigger,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="flex gap-4 flex-wrap">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input
            type="radio"
            value={opt}
            {...register(name)}
            onChange={(e) => {
              register(name).onChange(e);
              if (trigger) {
                trigger(name);
              }
            }}
          />
          {opt}
        </label>
      ))}
    </div>
    {error && <ErrorMsg msg={error.message} />}
  </div>
);

export default RadioGroup;
