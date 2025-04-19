import { useState } from "react";
import TextInput from "./TextInput";
import ImageUpload from "./ImageUpload";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { useAddQuestionMutation } from "../../store/questions/questionsApi";
import { useParams } from "react-router";
const QuestionForm = () => {
  const { id: chatId } = useParams<{ id: string }>();
  const [question, setQuestion] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [addQuestion, { isLoading }] = useAddQuestionMutation();
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
    const body = new FormData();
    body.append("question", question);
    body.append("image", image as File);
    if (chatId) addQuestion({ chatId, body });
    setImage(null);
    setPreview(null);
    setQuestion("");
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl  bottom-3  lg:bottom-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
      <TextInput value={question} onChange={setQuestion} />
      <div className="flex justify-between items-center ">
        <ImageUpload
          onImageSelect={setImage}
          preview={preview}
          setPreview={setPreview}
        />
        <SubmitButton handleSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default QuestionForm;
