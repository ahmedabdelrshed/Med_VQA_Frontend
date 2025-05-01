import { useParams } from "react-router";
import { useShareChatMutation } from "../store/chats/chatApi";
import { useAppDispatch } from "../store/hooks";
import { setShareChatLink } from "../store/chats/chatSlice";

const useShareChat = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const [shareChat, { isLoading }] = useShareChatMutation()
    const onShareChat = () => {
        shareChat(id as string).unwrap().then(({sharedLink}:{sharedLink:string}) => {
            console.log(sharedLink);
            dispatch(setShareChatLink(sharedLink))
            const modal = document.getElementById(
                "ShareChatModal"
            ) as HTMLDialogElement | null;
            modal?.showModal();
        });
    }
    return { onShareChat,shareChatLoading:isLoading }
}

export default useShareChat