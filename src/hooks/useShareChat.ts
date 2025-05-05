import { useParams } from "react-router";
import { useShareChatMutation } from "../store/chats/chatApi";
import { useAppDispatch } from "../store/hooks";
import { setShareChatLink } from "../store/chats/chatSlice";

const useShareChat = ( chatId?: string ) => {
    const { id } = useParams();
    if (!chatId) {
        chatId = id
    }
    const dispatch = useAppDispatch();
    const [shareChat, { isLoading }] = useShareChatMutation()
    const onShareChat = () => {
        shareChat(chatId as string).unwrap().then(({ sharedLink }: { sharedLink: string }) => {
            dispatch(setShareChatLink(sharedLink))
            const modal = document.getElementById(
                "ShareChatModal"
            ) as HTMLDialogElement | null;
            modal?.showModal();
        });
    }
    return { onShareChat, shareChatLoading: isLoading }
}

export default useShareChat