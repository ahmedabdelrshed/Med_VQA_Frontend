import toast from "react-hot-toast";
import { useDeleteChatMutation } from "../store/chats/chatApi";
import { useAppSelector } from "../store/hooks";
import { useNavigate, useParams } from "react-router";

const useDeleteChat = () => {
    const { id } = useParams();
    const [deleteChat, { isLoading }] = useDeleteChatMutation();
    const { deleteChatID } = useAppSelector((state) => state.chat);
    const navigate = useNavigate();
    const closeModal = () => {
        const modal = document.getElementById(
            "DelChatModal"
        ) as HTMLDialogElement | null;
        modal?.close();
    };
    const onDeleteChat = async () => {
        await deleteChat(deleteChatID).then(() => {
            toast.success("Chat Delete successfully");
            closeModal();
            if (id === deleteChatID) {
                navigate("/chats");
            }
        });
    };

    return {
        isLoading,
        onDeleteChat,
        closeModal,
    }
}

export default useDeleteChat