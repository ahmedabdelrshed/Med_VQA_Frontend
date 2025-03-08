import Cookies from "js-cookie";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
