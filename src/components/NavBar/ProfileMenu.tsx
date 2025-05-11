import { NavLink, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
interface IProps {
  setShowMenu: (val: boolean) => void;
}
const ProfileMenu = ({ setShowMenu }: IProps) => {
  const navigate = useNavigate();
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
      className="absolute top-[40px] right-[-7px] z-20 rounded-md px-3 py-2  "
      ref={refDiv}
    >
      <div className="bg-slate-100 w-fit  px-2 py-2  rounded-md">
        <NavLink
          to={"/profile"}
          className="flex text-blue-500  items-center mb-2 py-1 cursor-pointer px-3 hover:bg-blue-400 hover:text-white rounded-md "
        >
          Profile
        </NavLink>
         <NavLink
          to={"/healthy-profile"}
          className="flex text-blue-500  items-center mb-2 py-1 cursor-pointer px-3 hover:bg-blue-400 hover:text-white rounded-md "
        >
         Healthy Profile
        </NavLink>
        <span
          className="flex items-center mb-2 py-1 text-red-500 cursor-pointer px-3 hover:bg-red-400 hover:text-white rounded-md "
          onClick={() => {
            Cookies.remove("token");
            navigate("/");
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileMenu;
