import { NavLink, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useAppSelector } from "../../store/hooks";
import MenuItems from "./MenuItems";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

const NavBar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { avatar } = useAppSelector((state) => state.auth.user);
  return (
    <div className="navbar fixed z-50 justify-between px-6 py-2 bg-[#f0f8ff] shadow-sm">
      <div className="navbar-start w-fit lg:w-[50%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <MenuItems />
          </ul>
        </div>
        <a className="px-10 hidden lg:inline-flex">
          <img src="/images/logo.png" className="w-32" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 text-gray-600  font-semibold px-1">
          <MenuItems />
        </ul>
      </div>
      <NavLink to={"/"} className="lg:hidden">
        <img src="/images/logo.png" className="w-32 " alt="" />
      </NavLink>
      <div className="navbar-end w-fit lg:w-[50%] lg:pr-30 inline-flex">
        {token ? (
          <div className="relative inline-flex justify-center items-center  ">
            <img
              src={
                avatar ||
                "https://res.cloudinary.com/du04klrm0/image/upload/v1739842866/med_VQA_Data/profile-pictures/rlndzdsxm7lfi3alv60n.png"
              }
              className="object-cover cursor-pointer w-12 h-12 p-[2px] rounded-full ring-2 ring-blue-600 "
              alt="Avatar"
              onClick={() => setShowProfileMenu((prev) => !prev)}
            />
            {showProfileMenu && (
              <ProfileMenu setShowMenu={setShowProfileMenu} />
            )}
          </div>
        ) : (
          <button
            className="bg-white hidden lg:flex cursor-pointer border py-2 px-4 w-fit  rounded-lg font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
