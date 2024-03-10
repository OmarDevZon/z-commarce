import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { Recovery } from "../pages/Recovery";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Contact } from "../pages/Contact";
import DashboardLayout from "../components/layout/DashboardLayout";
import { routeGenerator } from "../utils/routesGenerator";
import { sellerPaths } from "./SellerRouts";
import { adminPaths } from "./admin.routs";
import { P404 } from "../pages/P404";
import { buyerPaths } from "./BuyerRouts";
import { NewArrivalsAll } from "../pages/Home/NewArrivalsAll";

const router = createBrowserRouter([
  { path: "*", element: <P404 /> },
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
      {
        path: "/new-arrivals",
        element: <NewArrivalsAll />,
      },
    ],
  },

  {
    path: "seller",
    element: <DashboardLayout />,
    children: routeGenerator(sellerPaths),
  },
  {
    path: "buyer",
    element: <DashboardLayout />,
    children: routeGenerator(buyerPaths),
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
]);

export default router;
