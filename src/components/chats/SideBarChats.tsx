import ChatTitle from "./ChatTitle";
import ChatTitleSkeleton from "./ChatTitleSkeleton";

const SideBarChats = () => {
  return (
    <div className="drawer lg:drawer-open  w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-300  text-base-content min-h-full w-60 p-3 pt-10">
          {/* Sidebar content here */}
          <ChatTitle chatNumber={1} />
          {Array.from({ length: 8 }, (_, index) => (
            <ChatTitleSkeleton key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarChats;
