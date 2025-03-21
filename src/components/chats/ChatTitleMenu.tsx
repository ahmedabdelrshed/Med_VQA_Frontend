import { useEffect, useRef } from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppDispatch } from "../../store/hooks";
import { setDeleteChatID, setUpdatedChat } from "../../store/chats/chatSlice";
interface IProps {
  setShowMenu: (val: boolean) => void;
  id: string;
  title: string;
}
const ChatTitleMenu = ({ setShowMenu, id, title }: IProps) => {
  const dispatch = useAppDispatch();
  const refDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowMenu]);

  const onDeleteChat = () => {
    const modal = document.getElementById(
      "DelChatModal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
    dispatch(setDeleteChatID(id));
  };
  const onUpdateChat = () => {
    const modal = document.getElementById(
      "UpdateChatModal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
    dispatch(setUpdatedChat({ id, title }));
  };
  return (
    <div>
      <div className="absolute top-[25px] right-[-7px] p-0 z-20" ref={refDiv}>
        <div className="bg-[#ece3e3] w-fit  px-1 py-2  rounded-md">
          <span
            onClick={onUpdateChat}
            className=" flex  items-center mb-2 py-1 cursor-pointer px-3  hover:bg-gray-400 rounded-md "
          >
            <GoPencil className="w-4 h-4 mr-2" /> Rename
          </span>
          <span
            className="flex items-center mb-2 py-1 text-red-500 cursor-pointer px-3 hover:bg-gray-300 rounded-md "
            onClick={onDeleteChat}
          >
            <RiDeleteBin5Line className="w-4 h-4 mr-2" /> Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatTitleMenu;
