import toast from "react-hot-toast";
import { useDeleteChatMutation } from "../store/chats/chatApi";
import { useAppSelector } from "../store/hooks";

const useDeleteChat = () => {
    const [deleteChat, { isLoading }] = useDeleteChatMutation();
    const { deleteChatID } = useAppSelector((state) => state.chat);
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
        });
    };

    return {
        isLoading,
        onDeleteChat,
        closeModal,
    }
}

export default useDeleteChat