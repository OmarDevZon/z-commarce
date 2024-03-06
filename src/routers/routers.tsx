import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { Recovery } from "../pages/Recovery";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Contact } from "../pages/Contact";
import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import { Dashboard } from "../pages/seller/Dashboard";
import { AddProduct } from "../pages/seller/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Recovery />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "seller/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
