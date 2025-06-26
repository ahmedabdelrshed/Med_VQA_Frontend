interface LabelInputProps {
  label: string;
  inputName: string;
}

const LabelInput = ({ inputName, label }: LabelInputProps) => {
  return (
    <label
      htmlFor={inputName}
      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {label}
    </label>
  );
};

export default LabelInput;
