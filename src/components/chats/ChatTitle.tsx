import { NavLink } from "react-router";
import { HiDotsHorizontal } from "react-icons/hi";

import { useState } from "react";
import ChatTitleMenu from "./ChatTitleMenu";

interface IProps {
  chatTitle: string;
  chatId: string;
}
const ChatTitle = ({ chatId, chatTitle }: IProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
const handleMenuClick = (e: React.MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  setMenuPosition({
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  });
  setShowMenu(true);
};
  return (
    <li className="mb-8 font-medium relative">
      <NavLink
        to={`/chats/chat/${chatId}`}
        className={({ isActive }) =>
          `text-blue-400  w-full  block hover:bg-white hover:rounded-2xl ${
            isActive ? "bg-white  rounded-2xl" : ""
          }`
        }
      >
        <div className="flex justify-between items-center w-full">
          <span>{chatTitle}</span>
          <span
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleMenuClick(event);
            }}
          >
            <HiDotsHorizontal className="w-5 h-5" />
          </span>
        </div>
      </NavLink>
      {showMenu && (
        <ChatTitleMenu
          setShowMenu={setShowMenu}
          id={chatId}
          title={chatTitle}
          position={menuPosition}
        />
      )}
    </li>
  );
};

export default ChatTitle;
