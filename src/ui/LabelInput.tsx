interface LabelInputProps {
  label: string;
  inputName: string;
}

const LabelInput = ({ inputName, label }: LabelInputProps) => {
  return (
    <label
      htmlFor={inputName}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
  );
};

export default LabelInput;
