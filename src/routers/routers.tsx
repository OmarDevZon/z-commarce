import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { Recovery } from "../pages/Recovery";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { Contact } from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login  />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/recovery",
        element: <Recovery/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
