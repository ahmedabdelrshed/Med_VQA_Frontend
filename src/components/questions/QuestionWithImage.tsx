import { BiSolidEdit } from "react-icons/bi";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  setDeleteQuestionID,
  setUpdatedQuestion,
} from "../../store/questions/questionSlice";
import { useLocation } from "react-router";

interface IProps {
  imageUrl: string;
  id: string;
}
const QuestionWithImage = ({ imageUrl,  id }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isSharedChat = location.pathname.includes("share");
  const onDeleteQuestion = () => {
    dispatch(setDeleteQuestionID(id));
    const modal = document.getElementById(
      "DelQuestionModal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  };
  const onUpdateQuestion = () => {
    dispatch(setUpdatedQuestion({ id }));
    const modal = document.getElementById(
      "UpdateQuestionModal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  };
  return (
    <div
      className="max-w-sm mt-2 w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageWithSkeleton imageUrl={imageUrl} />
      {!isSharedChat && (
        <div
          className={`flex  question-icons  space-x-2 px-4 mt-0.5 ${
            isHovered ? "opacity-100" : "opacity-0"
          }  transition-opacity duration-200`}
        >
          <BiSolidEdit
            className="w-4 text-indigo-600 cursor-pointer"
            onClick={onUpdateQuestion}
          />
          <MdDelete
            className="w-4 text-red-600 cursor-pointer"
            onClick={onDeleteQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionWithImage;
