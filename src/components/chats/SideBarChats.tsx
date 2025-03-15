import {  NavLink } from "react-router";

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
          <li className="mb-5 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-blue-400 hover:bg-white hover:rounded-2xl ${
                  isActive ? "bg-white text-black" : ""
                }`
              }
            >
              Sidebar Item 1
            </NavLink>
          </li>
          <li className="hover:bg-white text-blue-400 font-medium hover:rounded-2xl  mb-5">
            <a>Sidebar Item 2</a>
          </li>
          <li className="hover:bg-white text-blue-400 font-medium hover:rounded-2xl  mb-5">
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarChats;
