import { Outlet, useNavigate } from "react-router";
import SideBarChats from "../components/chats/SideBarChats";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { useCreateChatMutation } from "../store/chats/chatApi";
import DelChatModal from "../components/Modals/chat/DelChatModal";
import UpdateChatModal from "../components/Modals/chat/UpdateChatModal";
import ShareChatModal from "../components/Modals/chat/ShareShatModal";
import LogoutModel from "../components/Modals/LogoutModel";

const ChatPage = () => {
  const navigate = useNavigate();
  const [createChat] = useCreateChatMutation();
  const onCreateChat = () => {
    createChat().then((res) => {
      navigate(`/chats/chat/${res.data?.data._id}`);
    });
  };

  return (
    <div className="lg:flex max-h-screen">
      <div className=" bg-gray-300  lg:hidden  pb-2 pt-3 px-6 flex justify-between">
        <label htmlFor="my-drawer">
          <BsMenuButtonWide className="w-7 h-7 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer" />
        </label>
        <img src="/images/logo.png" className="w-34" alt="" />
        <IoCreateOutline
          onClick={onCreateChat}
          className="w-7 h-7 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
        />
      </div>
      <div className="flex flex-col relative z-50">
        <SideBarChats />
      </div>
      <div className="  flex-1">
        <Outlet />
      </div>
      <DelChatModal />
      <UpdateChatModal />
      <ShareChatModal />
      <LogoutModel />
    </div>
  );
};

export default ChatPage;
