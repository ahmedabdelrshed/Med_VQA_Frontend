import SideBarChats from "../components/chats/SideBarChats"

const ChatPage = () => {
  return (
      <div className="flex">
          <SideBarChats />
          <div className=" p-5">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
         </div>
    </div>
  )
}

export default ChatPage