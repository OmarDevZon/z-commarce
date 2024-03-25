/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TRoutsPaths } from "../utils/type/routerType";
import { BuyerDashboard } from "../pages/Buyer/BuyerDashboard";
import { MyCard } from "../pages/Buyer/MyCard";
import { MyFavoriteList } from "../pages/Buyer/MyFavoriteList";
import { MyOrder } from "../pages/Buyer/MyOrder";
import { MyReviews } from "../pages/Buyer/MyReviews";
import { ReportedProduct } from "../pages/Buyer/ReportedProduct";
import { Profile } from "../pages/Profile";
import { BanksCards } from "../pages/Buyer/BanksCards";
import { Addresses } from "../pages/Buyer/Addresses";
import { ChangePassword } from "../pages/ChangePassword";

export const buyerPaths: TRoutsPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: MdOutlineDashboardCustomize,
    element: <BuyerDashboard />,
  },
  {
    name: "My Account",
    icon: MdOutlineDashboardCustomize,
    children: [
      {
        name: "Profile",
        path: "my-Profile",
        icon: MdOutlineDashboardCustomize,
        element: <Profile />,
      },
      {
        name: "Banks & Cards",
        path: "banks-cards",
        icon: MdOutlineDashboardCustomize,
        element: <BanksCards />,
      },
      {
        name: "Addresses",
        path: "addresses",
        icon: MdOutlineDashboardCustomize,
        element: <Addresses />,
      },
      {
        name: "Change Password",
        path: "change-password",
        icon: MdOutlineDashboardCustomize,
        element: <ChangePassword />,
      },
    ],
  },

  {
    name: "My Card",
    path: "my-card",
    icon: MdOutlineDashboardCustomize,
    element: <MyCard />,
  },
  {
    name: "My Favorite List",
    icon: MdOutlineDashboardCustomize,
    path: "my-favorite-list",
    element: <MyFavoriteList />,
  },
  {
    name: "My Order",
    icon: MdOutlineDashboardCustomize,
    path: "my-order",
    element: <MyOrder />,
  },
  {
    name: "My Reviews",
    icon: MdOutlineDashboardCustomize,
    path: "my-reviews",
    element: <MyReviews />,
  },
  {
    name: "My Reported Products",
    icon: MdOutlineDashboardCustomize,
    path: "my-reported-products",
    element: <ReportedProduct />,
  },
];
