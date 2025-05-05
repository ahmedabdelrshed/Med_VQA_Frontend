import {  useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppDispatch } from "../../store/hooks";
import { setDeleteChatID, setUpdatedChat } from "../../store/chats/chatSlice";
import { IoShareOutline } from "react-icons/io5";
import useShareChat from "../../hooks/useShareChat";
import { openModel } from "../../utils/openMode";

interface IProps {
  setShowMenu: (val: boolean) => void;
  id: string;
  title: string;
  position: { top: number; left: number };
}

const ChatTitleMenu = ({ setShowMenu, id, title, position }: IProps) => {
  const dispatch = useAppDispatch();
  const refDiv = useRef<HTMLDivElement>(null);
  const { onShareChat } = useShareChat(id);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [setShowMenu]);

  const onDeleteChat = () => {
    openModel("DelChatModal");
    dispatch(setDeleteChatID(id));
  };

  const onUpdateChat = () => {
    openModel("UpdateChatModal");
    dispatch(setUpdatedChat({ id, title }));
  };

  return createPortal(
    <div
      ref={refDiv}
      className="absolute z-[100] p-0"
      style={{
        top: position?.top ,
        left: position?.left,
        position: "absolute",
      }}
    >
      <div className="bg-[#ece3e3] w-fit px-1 py-2 rounded-md shadow-lg">
        <span
          onClick={onUpdateChat}
          className="flex items-center mb-2 py-1 cursor-pointer px-3 hover:bg-gray-400 rounded-md"
        >
          <GoPencil className="w-4 h-4 mr-2" /> Rename
        </span>
       
          <span
            onClick={onShareChat}
            className="flex items-center mb-2 text-blue-500 py-1 cursor-pointer px-3 hover:bg-blue-500 hover:text-white rounded-md"
          >
            <IoShareOutline className="w-4 h-4 mr-2" /> Share
          </span>
     
        <span
          onClick={onDeleteChat}
          className="flex items-center mb-2 py-1 text-red-500 cursor-pointer px-3 hover:bg-gray-300 rounded-md"
        >
          <RiDeleteBin5Line className="w-4 h-4 mr-2" /> Delete
        </span>
      </div>
    </div>,
    document.body
  );
};

export default ChatTitleMenu;
