import { useState } from "react";
import { LuSend } from "react-icons/lu";
import TextInput from "./TextInput";
import ImageUpload from "./ImageUpload";
import toast from "react-hot-toast";
const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const validateForm = () => {
    if (!image || question.length < 1) {
      toast.error("Please select an medical image or write a question", {
        duration: 880,
        style: {
          fontSize: "12px",
        },
      });
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!validateForm()) return;
    console.log("Question:", question);
    console.log("Image:", image);
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl  bottom-3  lg:bottom-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
      <TextInput value={question} onChange={setQuestion} />
      <div className="flex justify-between items-center ">
        <ImageUpload onImageSelect={setImage} />
        <button
          className="mt-4 mr-3 text-white gradient-bg cursor-pointer p-2 rounded-full"
          onClick={handleSubmit}
        >
          <LuSend className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
