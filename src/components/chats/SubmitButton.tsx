import { LuSend } from "react-icons/lu";
import LoadingSpinner from "../../ui/LoadingSpinner";

interface SubmitButtonProps {
  handleSubmit: () => void;
  isLoading: boolean;
}
const SubmitButton = ({ handleSubmit, isLoading }: SubmitButtonProps) => {
  return (
    <button
      className="mr-3 text-white inline-flex items-center gradient-bg cursor-pointer p-2 rounded-full"
          onClick={handleSubmit}
          disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : <LuSend className="w-4 h-4" />}
    </button>
  );
};

export default SubmitButton;
