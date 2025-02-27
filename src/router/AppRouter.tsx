import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ConfirmationEmail from "../pages/ConfirmationEmail";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPasswordEmail from "../pages/ResetPasswordEmail";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="confirmEmail" element={<ConfirmationEmail />} />
        <Route path="forget_password" element={<ForgetPassword />} />
        <Route path="reset_password_email" element={<ResetPasswordEmail />} />
        <Route path="change_password/:token" element={<ChangePassword />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
