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
              setShowMenu(true);
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
        />
      )}
    </li>
  );
};

export default ChatTitle;
