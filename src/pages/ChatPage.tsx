import { Outlet } from "react-router";
import SideBarChats from "../components/chats/SideBarChats";

const ChatPage = () => {
  return (
    <div className="flex">
      <SideBarChats />
      <div className=" p-5">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
