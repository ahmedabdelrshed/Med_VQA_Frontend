import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { openModel } from "../../utils/modelsFuns";
import LogoutModel from "../Modals/LogoutModel";

interface IProps {
  setShowMenu: (val: boolean) => void;
}
const ProfileMenu = ({ setShowMenu }: IProps) => {
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
  return (
    <div
      className="absolute top-[48px] right-0 z-20 min-w-[180px] shadow-xl border border-slate-200 bg-white rounded-lg"
      ref={refDiv}
    >
      <div className="flex flex-col py-4 space-y-2">
        <Link
          to={"/profile"}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors duration-150 
                text-blue-400 hover:bg-blue-50 
            `}
        >
          <span className="text-gray-500">
            <IoPersonCircleSharp className="w-5 h-5" />
          </span>{" "}
          Personal Profile
        </Link>
        <Link
          to={"/healthy-profile"}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors duration-150 
                text-blue-400 hover:bg-blue-50 
            `}
        >
          <span className="text-gray-400">
            <MdOutlineHealthAndSafety className="w-5 h-5" />
          </span>{" "}
          Healthy Profile
        </Link>
        <div className="border-t my-2 border-slate-200" />
        <span
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
          onClick={() => openModel("logoutModal")}
        >
          <span className="text-gray-400">
            <CiLogout className="w-5 h-5" />
          </span>{" "}
          Logout
        </span>
        <LogoutModel />
      </div>
    </div>
  );
};

export default ProfileMenu;
