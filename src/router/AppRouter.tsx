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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
          <Route path="/">
              <Route index element={<Home/> } />
        <Route path="login" element={<Login />} />
        <Route path="confirmEmail" element={<ConfirmationEmail />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
