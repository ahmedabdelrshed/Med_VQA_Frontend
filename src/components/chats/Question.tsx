import { BiSolidEdit } from "react-icons/bi";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setDeleteQuestionID } from "../../store/questions/questionSlice";

interface IProps {
  question: string;
  imageUrl: string;
  id: string;
}
const Question = ({ imageUrl, question, id }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const onDeleteQuestion = () => {
    dispatch(setDeleteQuestionID(id));
    const modal = document.getElementById(
      "DelQuestionModal"
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
      <div className="question-text w-fit max-w-sm mt-2 text-sm lg:text-[16px] py-1 px-4 bg-white border lg:border-3 border-[#6178ff] rounded-full text-blue-400">
        <h1 className="   text-center ">{question}</h1>
      </div>

      <div
        className={`flex  question-icons  space-x-2 px-4 mt-0.5 ${
          isHovered ? "opacity-100" : "opacity-0"
        }  transition-opacity duration-200`}
      >
        <BiSolidEdit className="w-4 text-indigo-600 cursor-pointer" />
        <MdDelete
          className="w-4 text-red-600 cursor-pointer"
          onClick={onDeleteQuestion}
        />
      </div>
    </div>
  );
};

export default Question;
