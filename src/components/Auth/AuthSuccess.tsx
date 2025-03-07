import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/auth/authSlice";
const AuthSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const user = JSON.parse(decodeURIComponent(queryParams.get("user")!));

    if (token && user) {
      Cookies.set("token", token, { expires: 1 });
      Cookies.set("user", JSON.stringify(user), { expires: 1 });
      dispatch(setUser({ user, token }));
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location, navigate, dispatch]);
  return null;
};

export default AuthSuccess;
