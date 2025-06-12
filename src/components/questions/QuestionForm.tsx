import { useState } from "react";
import ImageUpload from "../chats/ImageUpload";
import toast from "react-hot-toast";
import SubmitButton from "../chats/SubmitButton";
import { useAddQuestionMutation } from "../../store/questions/questionsApi";
import { useParams } from "react-router";
import getPredictionFromModel from "../../utils/getPredictionFromModel";
import { CgMenuGridO } from "react-icons/cg";
import SelectSymptomsModel from "./SelectSymptomsModel";
import { openModel } from "../../utils/modelsFuns";
const QuestionForm = () => {
  const { id: chatId } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [loadingPrediction, setLoadingPrediction] = useState(false);
  const [addQuestion, { isLoading }] = useAddQuestionMutation();
  const validateForm = () => {
    if (!image) {
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
    if (response) {
      body.append("response", response as string);
      if (chatId) addQuestion({ chatId, body });
      setImage(null);
    }
    const inputElement = document.getElementById(
      "inputImage"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = ""; 
    }
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl  bottom-3  lg:bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
      <h1 className="text-[12px] lg:text-sm text-gray-500 mb-2">
        Upload your medical image or select Symptoms
      </h1>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-2">
          <ImageUpload
            onImageSelect={setImage}
            preview={preview}
            setPreview={setPreview}
          />
          <div
            className="flex px-4  bg-gray-300 rounded-xl py-1 cursor-pointer w-fit text-sm items-center"
            onClick={() => openModel("selectSymptomsModal")}
          >
            <CgMenuGridO className="w-4 h-4 lg:w-5.5 lg:h-5.5 text-gray-700 mr-3 bg-gray-400 rounded-2xl p-1" />{" "}
            Symptoms
          </div>
        </div>
        <SubmitButton
          handleSubmit={handleSubmit}
          isLoading={isLoading || loadingPrediction}
        />
      </div>
      <SelectSymptomsModel />
    </div>
  );
};

export default QuestionForm;
