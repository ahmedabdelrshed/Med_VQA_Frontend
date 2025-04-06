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
import ConfirmVerificationEmail from "../pages/ConfirmVerificationEmail";
import Profile from "../pages/Profile";
import AuthSuccess from "../components/Auth/AuthSuccess";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../errors/PageNotFound";
import ChatPage from "../pages/ChatPage";
import ChatInterface from "../components/chats/ChatInterface";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<ErrorHandler />}>
        <Route index element={<Home />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="confirmEmail" element={<ConfirmationEmail />} />
        <Route
          path="confirm_Verification_Email/:token"
          element={<ConfirmVerificationEmail />}
        />
        <Route path="forget_password" element={<ForgetPassword />} />
        <Route path="reset_password_email" element={<ResetPasswordEmail />} />
        <Route path="change_password/:token" element={<ChangePassword />} />
        <Route path="register" element={<Register />} />
        <Route path="authSuccess" element={<AuthSuccess />} />
        <Route
          path="chats"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="chat/:id"
            element={
              <ProtectedRoute>
                <ChatInterface />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
