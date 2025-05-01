import toast from "react-hot-toast";
import axiosInstance from "../config/axios.config";
import { TQuestion } from "../Types";
import axiosErrorHandler from "../utils/axiosErrorHandler";

type props = {
    setQuestions: (value: TQuestion[] | null) => void
    setIsLoading: (value: boolean) => void
    id:string
}
const getSharedChat = async ({ setIsLoading, setQuestions,id }: props) => {
    await axiosInstance.get(`/chat/shared-chat/${id}`)
        .then(res => {
            setQuestions(res.data.chat.questions)
        }).catch(err => {
            toast.error(axiosErrorHandler(err))
        }).finally(() => {
            setIsLoading(false)
        });
}

export default getSharedChat

