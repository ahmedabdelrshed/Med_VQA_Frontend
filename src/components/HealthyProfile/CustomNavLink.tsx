import { IconType } from "react-icons";
import { NavLink } from "react-router";

interface CustomNavLinkProps {
  to: string;
  icon: IconType;
  text: string;
}
const navLinkBase =
  "flex items-center space-x-8 justify-center py-3 w-full text-gray-700 rounded-md transition-all duration-200";
const activeHoverStyle = "bg-blue-100 text-blue-600";

const CustomNavLink = ({ to, icon: Icon, text }: CustomNavLinkProps) => {
  return (
    <NavLink
      end
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `${navLinkBase} ${
          isActive ? activeHoverStyle : "hover:bg-blue-100 hover:text-blue-600"
        }`
      }
    >
      <Icon className="w-6 h-6 text-gray-500" />
      <span className="xl:text-[18px]">{text}</span>
    </NavLink>
  );
};

export default CustomNavLink;
