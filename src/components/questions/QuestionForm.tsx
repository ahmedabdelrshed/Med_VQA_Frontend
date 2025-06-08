import { useState } from "react";
import ImageUpload from "../chats/ImageUpload";
import toast from "react-hot-toast";
import SubmitButton from "../chats/SubmitButton";
import { useAddQuestionMutation } from "../../store/questions/questionsApi";
import { useParams } from "react-router";
import getPredictionFromModel from "../../utils/getPredictionFromModel";
const QuestionForm = () => {
  const { id: chatId } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [loadingPrediction, setLoadingPrediction] = useState(false);
  const [addQuestion, { isLoading }] = useAddQuestionMutation();
  const validateForm = () => {
    if (!image ) {
      toast.error("Please select an medical image ", {
        duration: 880,
        style: {
          fontSize: "12px",
        },
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;
    const body = new FormData();
    setPreview(null);
    body.append("image", image as File);
    setLoadingPrediction(true);
    const response = await getPredictionFromModel(
      image as File,
      setLoadingPrediction
    );
    body.append("response", response as string);
    if (chatId) addQuestion({ chatId, body });
    setImage(null);
    const inputElement = document.getElementById(
      "inputImage"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = ""; // Reset the value of the file input
    }
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl  bottom-3  lg:bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
        <h1 className="text-sm text-gray-500 mb-2">
          Upload your medical image or select Symptoms
        </h1>
      <div className="flex justify-between items-center ">
        <ImageUpload
          onImageSelect={setImage}
          preview={preview}
          setPreview={setPreview}
        />
        <SubmitButton
          handleSubmit={handleSubmit}
          isLoading={isLoading || loadingPrediction}
        />
      </div>
    </div>
  );
};

export default QuestionForm;
