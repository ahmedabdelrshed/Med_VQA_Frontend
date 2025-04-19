import toast from "react-hot-toast";
import { useAppSelector } from "../store/hooks";
import { useDeleteQuestionMutation } from "../store/questions/questionsApi";

const useDeleteQuestion = () => {
    const [deleteQuestion, { isLoading }] = useDeleteQuestionMutation();
    const { deleteQuestionID } = useAppSelector((state) => state.question);
    const closeModal = () => {
        const modal = document.getElementById(
            "DelQuestionModal"
        ) as HTMLDialogElement | null;
        modal?.close();
    };
    const onDeleteQuestion = async () => {
        await deleteQuestion(deleteQuestionID).then(() => {
            toast.success("Question Delete successfully");
            closeModal();
        });
    };

    return {
        isLoading,
        onDeleteQuestion,
        closeModal,
    }
}

export default useDeleteQuestion