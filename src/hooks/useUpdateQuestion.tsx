import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import toast from "react-hot-toast";
import { useUpdateQuestionMutation } from "../store/questions/questionsApi";

const useUpdateQuestion = () => {
  const { updatedQuestion } = useAppSelector((state) => state.question);
  const [question, setQuestion] = useState(updatedQuestion.question);
  const [updateQuestion, { isLoading }] = useUpdateQuestionMutation();
  useEffect(() => {
    setQuestion(updatedQuestion.question);
  }, [updatedQuestion.question]);
  const closeModal = () => {
    const modal = document.getElementById(
      "UpdateQuestionModal"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const onUpdateQuestion = () => {
    updateQuestion({
      id: updatedQuestion.id,
      body: {
        question: question,
      },
    }).then(() => {
      closeModal();
      toast.success("Question Updated successfully");
    });
  };

  return {
    question: question,
    isLoading,
    updatedQuestion,
     onChangeQuestion,
     onUpdateQuestion,
    closeModal,
  };
};

export default useUpdateQuestion;
