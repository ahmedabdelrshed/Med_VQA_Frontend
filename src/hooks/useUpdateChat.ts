import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useUpdateChatMutation } from "../store/chats/chatApi";
import toast from "react-hot-toast";


const useUpdateChat = () => {
    const { updatedChat } = useAppSelector((state) => state.chat);
    const [title, setTile] = useState(updatedChat.title);
    const [updateChat, { isLoading }] = useUpdateChatMutation();
    useEffect(() => {
        setTile(updatedChat.title);
    }, [updatedChat.title]);
    const closeModal = () => {
        const modal = document.getElementById(
            "UpdateChatModal"
        ) as HTMLDialogElement | null;
        modal?.close();
    };
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTile(e.target.value);
    };
    const onUpdateChat = () => {
        updateChat({
            id: updatedChat.id,
            body: {
                title,
            },
        }).then(() => {
            closeModal();
            toast.success("Chat Delete successfully");
        });
    };


    return {
        title,
        isLoading,
        updatedChat,
        onChangeTitle,
        onUpdateChat,
        closeModal,
    }
}

export default useUpdateChat